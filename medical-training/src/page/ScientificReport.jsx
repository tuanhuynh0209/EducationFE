import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowDropDownOutlined, ArrowDropUpOutlined } from "@mui/icons-material";
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';


const data = [
  {
    name: 'Trần Duy Thanh',
    employeeId: 'A29-203',
    action: 'Biên dịch tài liệu',
    nameReported: 'Tên bài fulltext đã báo cáo',
    nameTopicReported: 'Nghiên cứu khoa học 1',
    proof: 'Chứng nhận báo cáo',
    nameConference: 'Hội nghi báo cáo 1',
    organizingUnit: 'Hội ABC',
    day: '04/10/2024',
    range:'Hội nghị trong nước',
    prize: 'Không',
    reportForm: 'Báo cáo hội trường',
    standardTimeTempFt: 10,
    totalMemFt: 200,
    roleFt: 'Tác giả đầu tiên',
    sameRoleMemFt: 2,
    contributionRate: 11,
    standardTimeFt: 10,
  },
  {
    name: 'Tiêu Trí Quang',
    employeeId: 'A29-204',
    action: 'Biên dịch tài liệu',
    nameReported: 'Tên bài fulltext đã báo cáo',
    nameTopicReported: 'Nghiên cứu khoa học 1',
    proof: 'Chứng nhận báo cáo',
    nameConference: 'Hội nghi báo cáo 1',
    organizingUnit: 'Hội ABC',
    day: '04/10/2024',
    range:'Hội nghị trong nước',
    prize: 'Không',
    reportForm: 'Báo cáo hội trường',
    standardTimeTempFt: 10,
    totalMemFt: 200,
    roleFt: 'Tác giả đầu tiên',
    sameRoleMemFt: 2,
    contributionRate: 11,
    standardTimeFt: 10,
  },
];
// Additional data entries here...


const ScientificReport = () => {

  const navigate = useNavigate();
  const handleAddClick = () => {
    navigate('/func/scientificReport/addSciReport');
  };

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='mx-8 bg-orange-400 w-full'>
      <div className='bg-slate-400 w-full relative p-2'>
        <span className='text-3xl font-semibold text-white block text-center break-words pr-20'>
          BÁO CÁO KHOA HỌC DẠNG BÀI FULLTEXT TẠI HỘI NGHỊ, HỘI THẢO SINH HOẠT CHUYÊN MÔN
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
              <th className="p-2">Tên bài fulltext đã báo cáo</th>
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
                  <td className="p-2">{document.nameReported}</td>
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
                        <p className="font-semibold text-gray-700 mb-2">Tên đề tài đã báo cáo</p>
                        <p className="font-semibold text-gray-700 mb-2">Minh chứng</p>
                        <p className="font-semibold text-gray-700 mb-2">Tên hội nghị khoa học đã báo cáo</p>
                        <p className="font-semibold text-gray-700 mb-2">Đơn vị tổ chức</p>
                        <p className="font-semibold text-gray-700 mb-2">Ngày</p>
                        <p className="font-semibold text-gray-700 mb-2">Phạm vi</p>
                        <p className="font-semibold text-gray-700 mb-2">Giải thưởng đạt được(nếu có)</p>
                        <p className="font-semibold text-gray-700 mb-2">Hình thức báo cáo</p>
                        <p className="font-semibold text-gray-700 mb-2">Giờ chuẩn quy đổi theo vai trò(tạm tính)</p>
                        <p className="font-semibold text-gray-700 mb-2">Tống số tác giả bài fulltext</p>
                        <p className="font-semibold text-gray-700 mb-2">Vai trò trong bài fulltext</p>
                        <p className="font-semibold text-gray-700 mb-2">Tổng số tác giả cùng vai trò</p>
                        <p className="font-semibold text-gray-700 mb-2">Tỷ lệ đóng góp</p>
                        <p className="font-semibold text-gray-700 mb-2">Giờ chuẩn quy đổi theo vai trò</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-2">{document.nameTopicReported}</p>
                        <p className="text-gray-600 mb-2">{document.proof}</p>
                        <p className="text-gray-600 mb-2">{document.nameConference}</p>
                        <p className="text-gray-600 mb-2">{document.organizingUnit}</p>
                        <p className="text-gray-600 mb-2">{document.day}</p>
                        <p className="text-gray-600 mb-2">{document.range}</p>
                        <p className="text-gray-600 mb-2">{document.prize}</p>
                        <p className="text-gray-600 mb-2">{document.reportForm}</p>
                        <p className="text-gray-600 mb-2">{document.standardTimeTempFt}</p>
                        <p className="text-gray-600 mb-2">{document.totalMemFt}</p>
                        <p className="text-gray-600 mb-2">{document.roleFt}</p>
                        <p className="text-gray-600 mb-2">{document.sameRoleMemFt}</p>
                        <p className="text-gray-600 mb-2">{document.contributionRate}</p>
                        <p className="text-gray-600 mb-2">{document.standardTimeFt}</p>
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

export default ScientificReport;
