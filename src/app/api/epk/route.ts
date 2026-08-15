/**
 * /app/api/epk/route.ts
 *
 * Genera y devuelve el EPK como PDF.
 * Usa import() dinámico para evitar que Turbopack intente
 * analizar @react-pdf/renderer en build time.
 */

import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    // Import dinámico — evita análisis estático de Turbopack.
    // @react-pdf/renderer requiere Node runtime y no es compatible
    // con el bundle de cliente/edge.
    const { renderToStream } = await import('@react-pdf/renderer');
    const { EPKDocument } = await import('@/components/pdf/EPKDocument');
    const { createElement } = await import('react');

    const stream = await renderToStream(createElement(EPKDocument));

    const chunks: Buffer[] = [];
    await new Promise<void>((resolve, reject) => {
      (stream as NodeJS.ReadableStream).on('data', (chunk: Buffer) =>
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)),
      );
      (stream as NodeJS.ReadableStream).on('end', resolve);
      (stream as NodeJS.ReadableStream).on('error', reject);
    });

    const pdfBuffer = Buffer.concat(chunks);

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Linarex-EPK-2026.pdf"',
        'Content-Length': pdfBuffer.byteLength.toString(),
        // Sin caché: cada descarga trae el PDF recién generado.
        // Cuando el EPK esté final y estable, puedes volver a un caché
        // suave (p. ej. 'public, max-age=3600, stale-while-revalidate=86400').
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  } catch (error) {
    console.error('[EPK Route] PDF generation failed:', error);
    return NextResponse.json(
      {
        error: 'Failed to generate EPK PDF',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
