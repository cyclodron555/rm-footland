"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Eye, EyeOff, Plus, Copy, Check, X, Edit2, CalendarIcon, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Simple password protection
const STUDIO_PASSWORD = "cyclodron2024" // Change this to your preferred password

type Platform = "YouTube" | "TikTok" | "Instagram" | "Facebook"
type PostType = "Long" | "Short" | "Reel" | "Photo"
type Status = "In Progress" | "Scheduled" | "Posted" | "Canceled"

interface Post {
  id: string
  platform: Platform
  postType: PostType
  caption: string
  assetLink: string
  plannedDate: string
  status: Status
}

export default function StudioPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [view, setView] = useState<"list" | "calendar">("list")
  const [currentMonth, setCurrentMonth] = useState(new Date())

  // Load posts from localStorage
  useEffect(() => {
    if (isAuthenticated) {
      const stored = localStorage.getItem("cyclodron-posts")
      if (stored) {
        setPosts(JSON.parse(stored))
      }
    }
  }, [isAuthenticated])

  // Save posts to localStorage
  useEffect(() => {
    if (isAuthenticated && posts.length >= 0) {
      localStorage.setItem("cyclodron-posts", JSON.stringify(posts))
    }
  }, [posts, isAuthenticated])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === STUDIO_PASSWORD) {
      setIsAuthenticated(true)
      setPassword("")
    } else {
      alert("Incorrect password")
    }
  }

  const addPost = (post: Omit<Post, "id">) => {
    setPosts([...posts, { ...post, id: Date.now().toString() }])
    setIsAdding(false)
  }

  const updatePost = (id: string, updates: Partial<Post>) => {
    setPosts(posts.map((p) => (p.id === id ? { ...p, ...updates } : p)))
    setEditingId(null)
  }

  const deletePost = (id: string) => {
    setPosts(posts.filter((p) => p.id !== id))
  }

  const copyCaption = (caption: string, id: string) => {
    navigator.clipboard.writeText(caption)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const today = new Date().toISOString().split("T")[0]
  const todayPosts = posts.filter((p) => p.plannedDate === today)
  const thisWeekPosts = posts.filter((p) => {
    const postDate = new Date(p.plannedDate)
    const todayDate = new Date(today)
    const weekFromNow = new Date(todayDate)
    weekFromNow.setDate(weekFromNow.getDate() + 7)
    return postDate > todayDate && postDate <= weekFromNow
  })

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 bg-zinc-900 border-zinc-800">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">Studio Access</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-primary"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <Button type="submit" className="w-full">
              Access Studio
            </Button>
          </form>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Social Studio</h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-zinc-900 rounded-lg p-1">
              <button
                onClick={() => setView("list")}
                className={`px-3 py-1.5 rounded flex items-center gap-2 text-sm transition-colors ${
                  view === "list" ? "bg-zinc-800 text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                <List size={16} />
                List
              </button>
              <button
                onClick={() => setView("calendar")}
                className={`px-3 py-1.5 rounded flex items-center gap-2 text-sm transition-colors ${
                  view === "calendar" ? "bg-zinc-800 text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                <CalendarIcon size={16} />
                Calendar
              </button>
            </div>
            <Button onClick={() => setIsAdding(true)} size="sm">
              <Plus size={16} className="mr-2" />
              Add Post
            </Button>
          </div>
        </div>

        {view === "list" ? (
          <>
            {/* Today Section */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-primary">Today</h2>
              {todayPosts.length === 0 ? (
                <p className="text-zinc-500">No posts planned for today</p>
              ) : (
                <div className="space-y-3">
                  {todayPosts.map((post) => (
                    <PostCard
                      key={post.id}
                      post={post}
                      onUpdate={updatePost}
                      onDelete={deletePost}
                      onCopy={copyCaption}
                      copiedId={copiedId}
                      editingId={editingId}
                      setEditingId={setEditingId}
                    />
                  ))}
                </div>
              )}
            </section>

            {/* This Week Section */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">This Week</h2>
              {thisWeekPosts.length === 0 ? (
                <p className="text-zinc-500">No posts planned this week</p>
              ) : (
                <div className="space-y-3">
                  {thisWeekPosts.map((post) => (
                    <PostCard
                      key={post.id}
                      post={post}
                      onUpdate={updatePost}
                      onDelete={deletePost}
                      onCopy={copyCaption}
                      copiedId={copiedId}
                      editingId={editingId}
                      setEditingId={setEditingId}
                    />
                  ))}
                </div>
              )}
            </section>
          </>
        ) : (
          <CalendarView
            posts={posts}
            currentMonth={currentMonth}
            setCurrentMonth={setCurrentMonth}
            onPostClick={setEditingId}
          />
        )}

        {/* Add Post Modal */}
        {isAdding && <PostForm onSubmit={addPost} onCancel={() => setIsAdding(false)} />}
      </div>
    </div>
  )
}

function CalendarView({
  posts,
  currentMonth,
  setCurrentMonth,
  onPostClick,
}: {
  posts: Post[]
  currentMonth: Date
  setCurrentMonth: (date: Date) => void
  onPostClick: (id: string) => void
}) {
  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()

  // Get first day of month and number of days
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startDayOfWeek = firstDay.getDay()

  // Create array of days including empty slots for alignment
  const days = []
  for (let i = 0; i < startDayOfWeek; i++) {
    days.push(null)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  const goToPrevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1))
  }

  const getPostsForDay = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    return posts.filter((p) => p.plannedDate === dateStr)
  }

  const getStatusColor = (status: Status) => {
    switch (status) {
      case "In Progress":
        return "bg-yellow-900/70 text-yellow-300"
      case "Scheduled":
        return "bg-blue-900/70 text-blue-300"
      case "Posted":
        return "bg-green-900/70 text-green-300"
      case "Canceled":
        return "bg-red-900/70 text-red-300"
      default:
        return "bg-zinc-800 text-zinc-300"
    }
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  return (
    <div>
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">
          {monthNames[month]} {year}
        </h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={goToPrevMonth} className="bg-zinc-900">
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={goToNextMonth} className="bg-zinc-900">
            Next
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {/* Day headers */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center text-sm font-semibold text-zinc-500 py-2">
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {days.map((day, index) => (
          <div
            key={index}
            className={`min-h-[120px] p-2 border border-zinc-800 rounded-lg ${
              day ? "bg-zinc-900/50" : "bg-transparent"
            }`}
          >
            {day && (
              <>
                <div className="text-sm font-medium text-zinc-400 mb-2">{day}</div>
                <div className="space-y-1">
                  {getPostsForDay(day).map((post) => (
                    <button
                      key={post.id}
                      onClick={() => onPostClick(post.id)}
                      className={`w-full text-left text-xs px-2 py-1 rounded ${getStatusColor(post.status)} hover:opacity-80 transition-opacity`}
                    >
                      <div className="font-medium truncate">
                        {post.platform} · {post.postType}
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function PostCard({
  post,
  onUpdate,
  onDelete,
  onCopy,
  copiedId,
  editingId,
  setEditingId,
}: {
  post: Post
  onUpdate: (id: string, updates: Partial<Post>) => void
  onDelete: (id: string) => void
  onCopy: (caption: string, id: string) => void
  copiedId: string | null
  editingId: string | null
  setEditingId: (id: string | null) => void
}) {
  if (editingId === post.id) {
    return (
      <PostForm initialData={post} onSubmit={(data) => onUpdate(post.id, data)} onCancel={() => setEditingId(null)} />
    )
  }

  const getStatusColor = (status: Status) => {
    switch (status) {
      case "In Progress":
        return "bg-yellow-900/50 text-yellow-300"
      case "Scheduled":
        return "bg-blue-900/50 text-blue-300"
      case "Posted":
        return "bg-green-900/50 text-green-300"
      case "Canceled":
        return "bg-red-900/50 text-red-300"
      default:
        return "bg-zinc-800 text-zinc-300"
    }
  }

  return (
    <Card className="p-4 bg-zinc-900 border-zinc-800">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 text-xs font-medium bg-zinc-800 rounded">{post.platform}</span>
          <span className="px-2 py-1 text-xs bg-zinc-800 rounded">{post.postType}</span>
          <span className={`px-2 py-1 text-xs rounded ${getStatusColor(post.status)}`}>{post.status}</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setEditingId(post.id)} className="text-zinc-400 hover:text-white">
            <Edit2 size={16} />
          </button>
          <button onClick={() => onDelete(post.id)} className="text-zinc-400 hover:text-red-400">
            <X size={16} />
          </button>
        </div>
      </div>

      <p className="text-sm text-zinc-300 mb-3">{post.caption}</p>

      <div className="flex items-center justify-between text-xs text-zinc-500">
        <span>{new Date(post.plannedDate).toLocaleDateString()}</span>
        <div className="flex items-center gap-2">
          {post.assetLink && (
            <a href={post.assetLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Asset
            </a>
          )}
          <button
            onClick={() => onCopy(post.caption, post.id)}
            className="flex items-center gap-1 text-primary hover:underline"
          >
            {copiedId === post.id ? (
              <>
                <Check size={12} />
                Copied
              </>
            ) : (
              <>
                <Copy size={12} />
                Copy
              </>
            )}
          </button>
        </div>
      </div>
    </Card>
  )
}

function PostForm({
  initialData,
  onSubmit,
  onCancel,
}: {
  initialData?: Post
  onSubmit: (data: Omit<Post, "id">) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState({
    platform: (initialData?.platform || "YouTube") as Platform,
    postType: (initialData?.postType || "Long") as PostType,
    caption: initialData?.caption || "",
    assetLink: initialData?.assetLink || "",
    plannedDate: initialData?.plannedDate || "",
    status: (initialData?.status || "In Progress") as Status,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-lg p-6 bg-zinc-900 border-zinc-800 max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-bold mb-4">{initialData ? "Edit Post" : "Add Post"}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Platform</label>
            <select
              value={formData.platform}
              onChange={(e) => setFormData({ ...formData, platform: e.target.value as Platform })}
              className="w-full px-3 py-2 bg-black border border-zinc-700 rounded text-white"
            >
              <option>YouTube</option>
              <option>TikTok</option>
              <option>Instagram</option>
              <option>Facebook</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Post Type</label>
            <select
              value={formData.postType}
              onChange={(e) => setFormData({ ...formData, postType: e.target.value as PostType })}
              className="w-full px-3 py-2 bg-black border border-zinc-700 rounded text-white"
            >
              <option>Long</option>
              <option>Short</option>
              <option>Reel</option>
              <option>Photo</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Caption</label>
            <textarea
              value={formData.caption}
              onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 bg-black border border-zinc-700 rounded text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Asset Link (optional)</label>
            <input
              type="url"
              value={formData.assetLink}
              onChange={(e) => setFormData({ ...formData, assetLink: e.target.value })}
              className="w-full px-3 py-2 bg-black border border-zinc-700 rounded text-white"
              placeholder="https://..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Planned Date</label>
            <input
              type="date"
              value={formData.plannedDate}
              onChange={(e) => setFormData({ ...formData, plannedDate: e.target.value })}
              className="w-full px-3 py-2 bg-black border border-zinc-700 rounded text-white [color-scheme:dark] cursor-pointer"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as Status })}
              className="w-full px-3 py-2 bg-black border border-zinc-700 rounded text-white"
            >
              <option>In Progress</option>
              <option>Scheduled</option>
              <option>Posted</option>
              <option>Canceled</option>
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1">
              {initialData ? "Update" : "Add"} Post
            </Button>
            <Button type="button" variant="outline" onClick={onCancel} className="flex-1 bg-transparent">
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
