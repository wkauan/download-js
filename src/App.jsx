function App() {
  return (
    <>
      <div className="bg-gray-300 h-screen flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <input type="url" name="url" placeholder="Insira o URL..." className="w-96 h-11 text-xs p-3 rounded-2xl" />
        </div>
        <div className="space-x-20 space-y-4">
          <button type="submit" className="bg-emerald-500 h-9 w-24 rounded-xl">Video</button>
          <button type="submit" className="bg-emerald-500 h-9 w-24 rounded-xl">MP3</button>
        </div>
      </div>
    </>
  )
}

export default App
