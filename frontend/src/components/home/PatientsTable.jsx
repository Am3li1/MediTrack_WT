import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const PatientsTable = ({ patients }) => {
    return (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
            <th className="border border-slate-600 rounded-md">No</th>
              <th className="border border-slate-600 rounded-md">Name</th>
              <th className="border border-slate-600 rounded-md:hidden">Age</th>
              <th className="border border-slate-600 rounded-md:hidden">Contact</th>
              <th className="border border-slate-600 rounded-md">Gender</th>
              <th className="border border-slate-600 rounded-md:hidden">Organ</th>
              <th className="border border-slate-600 rounded-md">Hospital</th>
              <th className="border border-slate-600 rounded-md">
                Blood_group
              </th>
              <th className="border border-slate-600 rounded-md">Status</th>
              <th className="border border-slate-600 rounded-md">Operations</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={patient._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {patient.name}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {patient.age}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {patient.contact}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {patient.gender}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {patient.organ}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {patient.hospital}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {patient.blood_group}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {patient.status}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/patients/details/${patient._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/patients/edit/${patient._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-600" />
                    </Link>
                    <Link to={`/patients/delete/${patient._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    )
}

export default PatientsTable