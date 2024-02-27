import "./Body.css";
import { SectionAdver } from "../Section/SectionAdver/SectionAdver";
import { NovoSalesforce } from "../Section/NovoSalesforce/NovoSalesforce";


export const Body = () => {
  return (
    <body className="container">
      <SectionAdver/>
      <NovoSalesforce/>
    </body>
  )
}