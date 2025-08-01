import FestivalAttendanceTable from '@/components/FestivalAttendanceTable';
import { ALL_USERS } from '@/lib/supabase';

interface FestivalAttendanceDemoProps {
  year: string;
  title: string;
  showPassport?: boolean;
  showStatus?: boolean;
  showCitizenship?: boolean;
}

const FestivalAttendanceDemo = ({
  year,
  title,
  showPassport = false,
  showStatus = true,
  showCitizenship = false,
}: FestivalAttendanceDemoProps) => {
  const users = ALL_USERS;

  return (
    <div className="space-y-8 p-0 max-w-7xl mx-auto">

      <FestivalAttendanceTable
        users={users}
        year={year}
        title={title}
        showPassport={showPassport}
        showStatus={showStatus}
        showCitizenship={showCitizenship}
      />
    </div>
  );
};

export default FestivalAttendanceDemo;