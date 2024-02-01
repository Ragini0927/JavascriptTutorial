import csv
from datetime import datetime, timedelta

def analyze_employee_records(file_path):
    # Dictionary to store employee data
    employees = {}

    with open(file_path, 'r') as file:
        reader = csv.reader(file)

        # Skip header if exists
        next(reader, None)

        for row in reader:
            try:
                position_id, position_status, time_in_str, time_out_str, timecard_hours, start_date, end_date, name, file_number = row

                # Convert string time to datetime objects
                time_in = datetime.strptime(time_in_str, '%Y-%m-%d %H:%M:%S')
                time_out = datetime.strptime(time_out_str, '%Y-%m-%d %H:%M:%S')

                # Add employee to the dictionary if not present
                if name not in employees:
                    employees[name] = []

                employees[name].append((time_in, time_out, position_status))

            except ValueError:
                print(f"Skipping row {row}: Invalid number of values.")

    # Analyze employee records
    for name, records in employees.items():
        for i in range(len(records) - 1):
            # Check for 7 consecutive days of work
            if (records[i+1][0] - records[i][1]).days == 1:
                print(f"{name} has worked for 7 consecutive days. Position: {records[i][2]}")

            # Check for less than 10 hours between shifts but greater than 1 hour
            time_between_shifts = records[i+1][0] - records[i][1]
            if 1 < time_between_shifts.total_seconds() / 3600 < 10:
                print(f"{name} has less than 10 hours between shifts but greater than 1 hour. Position: {records[i][2]}")

            # Check for more than 14 hours in a single shift
            shift_duration = records[i][1] - records[i][0]
            if shift_duration.total_seconds() / 3600 > 14:
                print(f"{name} has worked for more than 14 hours in a single shift. Position: {records[i][2]}")

if __name__ == "__main__":
    file_path = "C:/Users/HP/Downloads/Assignment_Timecard.xlsx - Sheet2.csv"  # Change this to the actual file path
    analyze_employee_records(file_path)
