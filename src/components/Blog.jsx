import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

function Blog() {
  const [posts, setPosts] = useState([])
  const [form, setForm] = useState({ title: '', content: '', tags: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchPosts() {
    try {
      const res = await fetch(`${API_BASE}/api/posts`)
      const data = await res.json()
      setPosts(Array.isArray(data) ? data : [])
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => { fetchPosts() }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const payload = {
        title: form.title,
        content: form.content,
        tags: form.tags ? form.tags.split(',').map(t => t.trim()).filter(Boolean) : [],
        published: true
      }
      const res = await fetch(`${API_BASE}/api/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to create post')
      await fetchPosts()
      setForm({ title: '', content: '', tags: '' })
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="blog" className="bg-gradient-to-b from-white to-purple-50/60 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-gray-900">Latest Updates</h3>
          <p className="mt-2 text-gray-600">Publish new notes right from this page. Markdown supported.</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-purple-100 bg-white p-6 shadow-lg shadow-purple-100">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700">Title</label>
              <input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white/80 px-3 py-2 outline-none ring-[#9B59B6]/20 transition focus:ring-4"
                placeholder="Post title"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Tags</label>
              <input
                value={form.tags}
                onChange={(e) => setForm({ ...form, tags: e.target.value })}
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white/80 px-3 py-2 outline-none ring-[#9B59B6]/20 transition focus:ring-4"
                placeholder="design, dev, thoughts"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">Content</label>
            <textarea
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              required
              rows={5}
              className="mt-1 w-full rounded-xl border border-gray-200 bg-white/80 px-3 py-2 outline-none ring-[#9B59B6]/20 transition focus:ring-4"
              placeholder="Write something meaningful..."
            />
          </div>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#6A0DAD] px-4 py-2 font-semibold text-white shadow-lg shadow-purple-300 transition hover:bg-[#5a0b95] disabled:opacity-60"
          >
            {loading ? 'Publishing...' : 'Publish Post'}
          </button>
        </form>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {posts.map((p) => (
            <article key={p.id} className="rounded-2xl border border-purple-100 bg-white p-6 shadow-lg shadow-purple-100">
              <h4 className="text-xl font-semibold text-gray-900">{p.title}</h4>
              {p.tags?.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-[#9B59B6]/10 px-3 py-0.5 text-xs text-[#6A0DAD]">{t}</span>
                  ))}
                </div>
              )}
              <p className="mt-3 whitespace-pre-wrap text-gray-700">{p.content}</p>
              <p className="mt-4 text-xs text-gray-500">{p.created_at ? new Date(p.created_at).toLocaleString() : ''}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
