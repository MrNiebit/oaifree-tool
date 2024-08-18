export default function Study() {
    return (
     <div>
        
        <div className="bg-blue-500 text-white p-4">
            <h1 className="text-2xl font-bold">Game Page</h1>
            <p className="mt-2">This is the game page content.</p>
        </div>

        <div>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-blue-700">
            Click Me
            </button>
            <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded hover:bg-blue-500 hover:text-white">
            Outline Button
            </button>
            <button className="bg-gray-400 text-white py-2 px-4 rounded cursor-not-allowed opacity-50" disabled>
            Disabled
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded flex items-center">
            <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4V1L6 6l6 5V6l3 3V4h-3zm-3 8l6 5V12l-6-5v5H5v2h4v5zm10-1h2V8h-2v5zM3 13v2h3v-2H3zm0-4h2V6H3v3z" /></svg>
            Loading...
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 active:bg-green-800">
            Active Button
            </button>
            <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Custom Button
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded md:bg-green-500 lg:bg-red-500">
            Responsive Button
            </button>

            <button>我是一个默认的按钮</button>
        </div>
    </div>
    )
}