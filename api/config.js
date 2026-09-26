module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  const supabaseUrl = process.env.SUPABASE_URL || '';
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

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
