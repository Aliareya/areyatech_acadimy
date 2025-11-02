import React from 'react'

function InfoPopup({ onClose}) {
  return (
    // لایه تاریک پشت Popup
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* خود Popup */}
      <div className="w-80 h-60 bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between">
        <h2 className="text-lg font-bold text-center">عملیات انتخابی</h2>
        <p className="text-center text-gray-700">آیا می‌خواهید این آیتم را آپدیت یا حذف کنید؟</p>
        
        {/* دکمه‌ها */}
        <div className="flex justify-between mt-4">
          <button 
            className="bg-gray-300 px-3 py-1 rounded" 
            onClick={onClose}
          >
            لغو
          </button>
          {/* <button 
            className="bg-red-500 text-white px-3 py-1 rounded" 
            onClick={onDelete}
          >
            حذف
          </button>
          <button 
            className="bg-green-500 text-white px-3 py-1 rounded" 
            onClick={onUpdate}
          >
            آپدیت
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default InfoPopup
