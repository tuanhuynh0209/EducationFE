import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowDropDownOutlined, ArrowDropUpOutlined } from "@mui/icons-material";
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';


const data = [
  {
    name: 'Trần Duy Thanh',
    employeeId: 'A29-203',
    action: 'Đề cương NCKH đã tham gia đấu thầu hoặc xét tuyển nhưng không được duyệt',
    tpcTitle: 'Nghiên cứu khoa học 1',
    range: 'Cấp bộ-tỉnh/thành phố-nhánh cấp nhà nước hoặc có giá trị > 500 triệu đồng',
    idContract: 200320209,
    day: '04/10/2024',
    standardTime: 0,
    role: 'Chủ nhiệm và đồng chủ nhiệm: 50%',
    numberRole: 1,
    contributionRate: 30,
    timeRole: 72
  },
  {
    name: 'Tiêu Trí Quang',
    employeeId: 'A29-204',
    action: 'Đề cương NCKH đã tham gia đấu thầu hoặc xét tuyển nhưng không được duyệt',
    tpcTitle: 'Nghiên cứu khoa học 1',
    range: 'Cấp bộ-tỉnh/thành phố-nhánh cấp nhà nước hoặc có giá trị > 500 triệu đồng',
    idContract: 200320209,
    day: '04/10/2024',
    standardTime: 0,
    role: 'Chủ nhiệm và đồng chủ nhiệm: 50%',
    numberRole: 1,
    contributionRate: 30,
    timeRole: 72
  },
  {
    name: 'Đặng Duy Thái',
    employeeId: 'A29-205',
    action: 'Đề cương NCKH đã tham gia đấu thầu hoặc xét tuyển nhưng không được duyệt',
    tpcTitle: 'Nghiên cứu khoa học 1',
    range: 'Cấp bộ-tỉnh/thành phố-nhánh cấp nhà nước hoặc có giá trị > 500 triệu đồng',
    idContract: 200320209,
    day: '04/10/2024',
    standardTime: 0,
    role: 'Chủ nhiệm và đồng chủ nhiệm: 50%',
    numberRole: 1,
    contributionRate: 30,
    timeRole: 72
  },
  {
    name: 'Nguyễn Thành Duy',
    employeeId: 'A29-204',
    action: 'Đề cương NCKH đã tham gia đấu thầu hoặc xét tuyển nhưng không được duyệt',
    tpcTitle: 'Nghiên cứu khoa học 1',
    range: 'Cấp bộ-tỉnh/thành phố-nhánh cấp nhà nước hoặc có giá trị > 500 triệu đồng',
    idContract: 200320209,
    day: '04/10/2024',
    standardTime: 0,
    role: 'Chủ nhiệm và đồng chủ nhiệm: 50%',
    numberRole: 1,
    contributionRate: 30,
    timeRole: 72
  },
  {
    name: 'Nguyễn Đức Vinh',
    employeeId: 'A29-205',
    action: 'Đề cương NCKH đã tham gia đấu thầu hoặc xét tuyển nhưng không được duyệt',
    tpcTitle: 'Nghiên cứu khoa học 1',
    range: 'Cấp bộ-tỉnh/thành phố-nhánh cấp nhà nước hoặc có giá trị > 500 triệu đồng',
    idContract: 200320209,
    day: '04/10/2024',
    standardTime: 0,
    role: 'Chủ nhiệm và đồng chủ nhiệm: 50%',
    numberRole: 1,
    contributionRate: 30,
    timeRole: 72
  },
  {
    name: 'Ngô Trần Hoàng Phát',
    employeeId: 'A29-204',
    action: 'Đề cương NCKH đã tham gia đấu thầu hoặc xét tuyển nhưng không được duyệt',
    tpcTitle: 'Nghiên cứu khoa học 1',
    range: 'Cấp bộ-tỉnh/thành phố-nhánh cấp nhà nước hoặc có giá trị > 500 triệu đồng',
    idContract: 200320209,
    day: '04/10/2024',
    standardTime: 0,
    role: 'Chủ nhiệm và đồng chủ nhiệm: 50%',
    numberRole: 1,
    contributionRate: 30,
    timeRole: 72
  },
  {
    name: 'Huỳnh Vũ Anh Tuấn',
    employeeId: 'A29-205',
    action: 'Đề cương NCKH đã tham gia đấu thầu hoặc xét tuyển nhưng không được duyệt',
    tpcTitle: 'Nghiên cứu khoa học 1',
    range: 'Cấp bộ-tỉnh/thành phố-nhánh cấp nhà nước hoặc có giá trị > 500 triệu đồng',
    idContract: 200320209,
    day: '04/10/2024',
    standardTime: 0,
    role: 'Chủ nhiệm và đồng chủ nhiệm: 50%',
    numberRole: 1,
    contributionRate: 30,
    timeRole: 72
  },
  {
    name: 'Huỳnh Vũ Anh Tuấn',
    employeeId: 'A29-205',
    action: 'Đề cương NCKH đã tham gia đấu thầu hoặc xét tuyển nhưng không được duyệt',
    tpcTitle: 'Nghiên cứu khoa học 1',
    range: 'Cấp bộ-tỉnh/thành phố-nhánh cấp nhà nước hoặc có giá trị > 500 triệu đồng',
    idContract: 200320209,
    day: '04/10/2024',
    standardTime: 0,
    role: 'Chủ nhiệm và đồng chủ nhiệm: 50%',
    numberRole: 1,
    contributionRate: 30,
    timeRole: 72
  }
];
// Additional data entries here...


const ScientificResearchTopic = () => {

  const navigate = useNavigate();
  const handleAddClick = () => {
    navigate('/func/scientificResearchTopic/addSciResTpc');
  };

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='mx-8 bg-orange-400 w-full'>
      <div className='bg-slate-400 w-full relative flex items-center justify-center p-2'>
        <span className='text-3xl font-semibold text-white'>ĐỀ TÀI NGHIÊN CỨU KHOA HỌC</span>
        <button onClick={handleAddClick} className='absolute right-4 flex gap-1 font-semibold text-white bg-[#F9A150] p-2 rounded-sm'>
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
              <th className="p-2">Tên đề tài/ đề cương NCKH</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((scientificResTpc, index) => (
              <React.Fragment key={index}>
                <tr className="bg-gray-800 text-white border-b-2 border-white">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{scientificResTpc.name}</td>
                  <td className="p-2">{scientificResTpc.employeeId}</td>
                  <td className="p-2">{scientificResTpc.action}</td>
                  <td className="p-2">{scientificResTpc.tpcTitle}</td>
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
                        <p className="font-semibold text-gray-700 mb-2">Phạm vi, cấp độ</p>
                        <p className="font-semibold text-gray-700 mb-2">Mã số hợp đồng</p>
                        <p className="font-semibold text-gray-700 mb-2">Ngày</p>
                        <p className="font-semibold text-gray-700 mb-2">Giờ chuẩn hoạt động</p>
                        <p className="font-semibold text-gray-700 mb-2">Vai trò</p>
                        <p className="font-semibold text-gray-700 mb-2">Số lượng thành viên cùng vai trò</p>
                        <p className="font-semibold text-gray-700 mb-2">Tỷ lệ đóng góp</p>
                        <p className="font-semibold text-gray-700 mb-2">Giờ chuẩn quy đổi theo vai trò</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-2">{scientificResTpc.range}</p>
                        <p className="text-gray-600 mb-2">{scientificResTpc.idContract}</p>
                        <p className="text-gray-600 mb-2">{scientificResTpc.day}</p>
                        <p className="text-gray-600 mb-2">{scientificResTpc.standardTime}</p>
                        <p className="text-gray-600 mb-2">{scientificResTpc.role}</p>
                        <p className="text-gray-600 mb-2">{scientificResTpc.numberRole}</p>
                        <p className="text-gray-600 mb-2">{scientificResTpc.contributionRate}</p>
                        <p className="text-gray-600 mb-2">{scientificResTpc.timeRole}</p>
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

export default ScientificResearchTopic;
