module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  const supabaseUrl = process.env.SUPABASE_URL || 'https://agnpkaorhzdponthmduq.supabase.co';
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnbnBrYW9yaHpkcG9udGhtZHVxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MDM2NDQyOSwiZXhwIjoyMTA1OTQwNDI5fQ.KNywbrurpKTlHrZhaXcEyTevjiTlfLTlLlQwwPCLqmY';

  if (!supabaseUrl || !supabaseAnonKey) {
    return res.status(503).json({
      ok: false,
      error: 'SUPABASE_URL atau SUPABASE_ANON_KEY belum diatur di Vercel.'
    });
  }

  return res.status(200).json({
    ok: true,
    supabaseUrl,
    supabaseAnonKey
  });
};
