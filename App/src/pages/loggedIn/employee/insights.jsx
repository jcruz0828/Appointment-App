import React from "react";
import EmployeeStats from "../../../components/insights/stats";
import {WeeklyAppointments,MonthlyAppointments,YearlyAppointments} from "../../../components/insights/chart";

const Insights = () => {
  return(
  <>
  <EmployeeStats/>
      <h2 className="text-center mb-4">Appointment Statistics</h2>

      <WeeklyAppointments className="w-100 mb-4" />
      <MonthlyAppointments className="w-100 mb-4" />
      <YearlyAppointments className="w-100 mb-4" />
  </>
  )
}
export default Insights;