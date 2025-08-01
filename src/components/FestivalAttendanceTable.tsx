// components/FestivalAttendanceDemo.tsx
import React, { useMemo } from 'react';

interface User {
  surname: string;
  passport?: string;
  firstName: string;
  birthDate?: string;
  citizenshipDate?: string;
  passportDate?: string;
  status: string;
  citStatus: string;
  attendance: string;
}

interface FestivalAttendanceTableProps {
  users: User[];
  year: string;
  title?: string;
  showPassport?: boolean;
  showStatus?: boolean;
  showCitizenship?: boolean;
  className?: string;
}

const FestivalAttendanceTable: React.FC<FestivalAttendanceTableProps> = ({
  users,
  year,
  title,
  showPassport = true,
  showStatus = true,
  showCitizenship = false,
  className = ""
}) => {
  const attendees = useMemo(() => {
    return users.filter(user => {
      if (!user.attendance) return false;
      return user.attendance.split(', ').includes(year);
    }).sort((a, b) => a.surname.localeCompare(b.surname));
  }, [users, year]);

  const stats = useMemo(() => {
    const total = attendees.length;
    const active = attendees.filter(user => user.citStatus === "Дійсне").length;
    const frozen = attendees.filter(user => user.citStatus === "Заморожене").length;
    return { total, active, frozen };
  }, [attendees]);

  if (attendees.length === 0) {
    return (
      <div className={`bg-gray-50 border border-gray-200 rounded-lg p-8 text-center ${className}`}>
        <h3 className="text-lg font-semibold text-gray-600 mb-2">
          {title || `Фестиваль ${year}`}
        </h3>
        <p className="text-gray-500">Немає даних про відвідувачів за цей рік</p>
      </div>
    );
  }

  return (
    <div className={`bg-white border border-gray-200 rounded-lg shadow-sm ${className}`}>
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">
          {title || `Фестиваль ${year}`}
        </h3>
        <div className="mt-2 flex gap-6 text-sm text-gray-600">
          <span>Всього: <strong className="text-gray-900">{stats.total}</strong></span>
          <span>Активні: <strong className="text-green-600">{stats.active}</strong></span>
          {stats.frozen > 0 && (
            <span>Заморожені: <strong className="text-orange-600">{stats.frozen}</strong></span>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">№</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Прізвище</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ім'я</th>
              {showPassport && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Паспорт</th>
              )}
              {showStatus && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Посада</th>
              )}
              {showCitizenship && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ЗРАЗОК</th>
              )}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Громадянство</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {attendees.map((user, index) => (
              <tr key={user.passport} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-500">{index + 1}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.surname}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{user.firstName}</td>
                {showPassport && (
                  <td className="px-6 py-4 text-sm text-gray-500 font-mono">{user.passport}</td>
                )}
                {showStatus && (
                  <td className="px-6 py-4 text-sm text-gray-600">{user.status}</td>
                )}
                {showCitizenship && (
                  <td className="px-6 py-4 text-sm text-gray-500">{user.citizenshipDate}</td>
                )}
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    user.citStatus === "Дійсне"
                      ? "bg-green-100 text-green-800"
                      : user?.citStatus === "Недійсне"
                      ? "bg-red-100 text-red-800"
                      : user?.citStatus === "Довічне"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-orange-100 text-orange-800"
                  }`}>
                    {user.citStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 text-xs text-gray-500">
        Дані відсортовані за прізвищем • Оновлено: {new Date().toLocaleDateString('uk-UA')}
      </div>
    </div>
  );
};

export default FestivalAttendanceTable;