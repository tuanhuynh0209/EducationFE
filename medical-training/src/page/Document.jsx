import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowDropDownOutlined, ArrowDropUpOutlined } from "@mui/icons-material";
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';


const data = [
  {
    name: 'Trần Duy Thanh',
    employeeId: 'A29-203',
    reprint: 'tái bản',
    action: 'Biên dịch tài liệu',
    document: 'Nghiên cứu khoa học',
    totalPage: 100,
    language: 'Tiếng Việt',
    dayReprint: '04/10/2024',
    standardTime: 10,
    role: 'Thành viên biên soạn bao gồm cả chủ biên',
    totalMem: 200,
    totalPageInCharge: 11,
    contributionRate: 11,
    timeRole: 10, 
  },
  {
    name: 'Tiêu Trí Quang',
    employeeId: 'A29-204',
    reprint: 'tái bản',
    action: 'Biên dịch tài liệu',
    document: 'Nghiên cứu khoa học',
    totalPage: 100,
    language: 'Tiếng Việt',
    dayReprint: '04/10/2024',
    standardTime: 10,
    role: 'Thành viên biên soạn bao gồm cả chủ biên',
    totalMem: 200,
    totalPageInCharge: 11,
    contributionRate: 11,
    timeRole: 10, 
  },
  {
    name: 'Đặng Duy Thái',
    employeeId: 'A29-205',
    reprint: 'tái bản',
    action: 'Biên dịch tài liệu',
    document: 'Nghiên cứu khoa học',
    totalPage: 100,
    language: 'Tiếng Việt',
    dayReprint: '04/10/2024',
    standardTime: 10,
    role: 'Thành viên biên soạn bao gồm cả chủ biên',
    totalMem: 200,
    totalPageInCharge: 11,
    contributionRate: 11,
    timeRole: 10, 
  },
  {
    name: 'Nguyễn Thành Duy',
    employeeId: 'A29-204',
    reprint: 'tái bản',
    action: 'Biên dịch tài liệu',
    document: 'Nghiên cứu khoa học',
    totalPage: 100,
    language: 'Tiếng Việt',
    dayReprint: '04/10/2024',
    standardTime: 10,
    role: 'Thành viên biên soạn bao gồm cả chủ biên',
    totalMem: 200,
    totalPageInCharge: 11,
    contributionRate: 11,
    timeRole: 10, 
  },
  {
    name: 'Nguyễn Đức Vinh',
    employeeId: 'A29-205',
    reprint: 'tái bản',
    action: 'Biên dịch tài liệu',
    document: 'Nghiên cứu khoa học',
    totalPage: 100,
    language: 'Tiếng Việt',
    dayReprint: '04/10/2024',
    standardTime: 10,
    role: 'Thành viên biên soạn bao gồm cả chủ biên',
    totalMem: 200,
    totalPageInCharge: 11,
    contributionRate: 11,
    timeRole: 10, 
  },
  {
    name: 'Ngô Trần Hoàng Phát',
    employeeId: 'A29-204',
    reprint: 'tái bản',
    action: 'Biên dịch tài liệu',
    document: 'Nghiên cứu khoa học',
    totalPage: 100,
    language: 'Tiếng Việt',
    dayReprint: '04/10/2024',
    standardTime: 10,
    role: 'Thành viên biên soạn bao gồm cả chủ biên',
    totalMem: 200,
    totalPageInCharge: 11,
    contributionRate: 11,
    timeRole: 10, 
  },
  {
    name: 'Huỳnh Vũ Anh Tuấn',
    employeeId: 'A29-205',
    reprint: 'tái bản',
    action: 'Biên dịch tài liệu',
    document: 'Nghiên cứu khoa học',
    totalPage: 100,
    language: 'Tiếng Việt',
    dayReprint: '04/10/2024',
    standardTime: 10,
    role: 'Thành viên biên soạn bao gồm cả chủ biên',
    totalMem: 200,
    totalPageInCharge: 11,
    contributionRate: 11,
    timeRole: 10, 
  },
  {
    name: 'Huỳnh Vũ Anh Tuấn',
    employeeId: 'A29-205',
    reprint: 'tái bản',
    action: 'Biên dịch tài liệu',
    document: 'Nghiên cứu khoa học',
    totalPage: 100,
    language: 'Tiếng Việt',
    dayReprint: '04/10/2024',
    standardTime: 10,
    role: 'Thành viên biên soạn bao gồm cả chủ biên',
    totalMem: 200,
    totalPageInCharge: 11,
    contributionRate: 11,
    timeRole: 10, 
  }
];
// Additional data entries here...


const Document = () => {

  const navigate = useNavigate();
  const handleAddClick = () => {
    navigate('/func/document/addDocument');
  };

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='mx-8 bg-orange-400 w-full'>
      <div className='bg-slate-400 w-full relative p-2'>
        <span className='text-3xl font-semibold text-white block text-center break-words pr-20'>
          SÁCH, TÀI LIỆU
        </span>
        <button onClick={handleAddClick} className='absolute right-4 top-1/2 transform -translate-y-1/2 flex gap-1 font-semibold text-white bg-[#F9A150] p-2 rounded-sm'>
          <span>Thêm</span>
          <LibraryAddOutlinedIcon className='text-white' />
        </button>
      </div>

      <div className="bg-slate-300 w-full mt-5">
        <table className="table-auto w-full text-center" style={{ tableLayout: 'fixed' }}>
          <thead>
            <tr className="bg-gray-800 text-white border-b-2">
              <th className="p-2">STT</th>
              <th className="p-2">Họ và tên</th>
              <th className="p-2">Mã số nhân viên</th>
              <th className="p-2">Hoạt động</th>
              <th className="p-2">Tên sách, tài liệu</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((document, index) => (
              <React.Fragment key={index}>
                <tr className="bg-gray-800 text-white border-b-2 border-white">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{document.name}</td>
                  <td className="p-2">{document.employeeId}</td>
                  <td className="p-2">{document.action}</td>
                  <td className="p-2">{document.document}</td>
                  <td className="p-2">
                    <button onClick={() => toggleExpand(index)}>
                      {expandedIndex === index ? <ArrowDropUpOutlined /> : <ArrowDropDownOutlined />}
                    </button>
                  </td>
                </tr>
                <tr className={`transition-all duration-300 ${expandedIndex === index ? '' : 'hidden'}`}>
                  <td className="p-4" colSpan="5">
                    <div className="grid grid-cols-2 gap-8 text-left bg-gray-100 rounded-lg shadow-lg p-6">
                      <div>
                        <p className="font-semibold text-gray-700 mb-2">Tái bản, xuất bản</p>
                        <p className="font-semibold text-gray-700 mb-2">Tống số trang sách, tài liệu</p>
                        <p className="font-semibold text-gray-700 mb-2">Ngôn ngữ xuất bản</p>
                        <p className="font-semibold text-gray-700 mb-2">Ngày xuất bản, thẩm định, nghiệm thu</p>
                        <p className="font-semibold text-gray-700 mb-2">Giờ chuẩn hoạt động</p>
                        <p className="font-semibold text-gray-700 mb-2">Vai trò</p>
                        <p className="font-semibold text-gray-700 mb-2">Tổng số thành viên ban biên soạn</p>
                        <p className="font-semibold text-gray-700 mb-2">Tổng số trang phụ trách</p>
                        <p className="font-semibold text-gray-700 mb-2">Tỉ lệ đóng góp</p>
                        <p className="font-semibold text-gray-700 mb-2">Giờ chuẩn quy đổi theo vai trò</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-2">{document.reprint}</p>
                        <p className="text-gray-600 mb-2">{document.totalPage}</p>
                        <p className="text-gray-600 mb-2">{document.language}</p>
                        <p className="text-gray-600 mb-2">{document.dayReprint}</p>
                        <p className="text-gray-600 mb-2">{document.standardTime}</p>
                        <p className="text-gray-600 mb-2">{document.role}</p>
                        <p className="text-gray-600 mb-2">{document.totalMem}</p>
                        <p className="text-gray-600 mb-2">{document.totalPageInCharge}</p>
                        <p className="text-gray-600 mb-2">{document.contributionRate}</p>
                        <p className="text-gray-600 mb-2">{document.timeRole}</p>
                      </div>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Document;
