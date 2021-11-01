import React, { useState } from "react";
import "./Dashboard.css";
import DashboardHeader from "./DashboardHeader";
import pencil from "../../assets/pencil.svg";
import trash from "../../assets/trash.svg";
import Input from "../input/Input";
import Button from "../buttons/Button";
export default function Dashboard() {
  const [table, setTable] = useState(true);
  const handleClick = () => {
    setTable(!table);
  };
  return (
    <div className="dashboard">
      <DashboardHeader handleClick={handleClick} />
      <div className="container">
        <div className="dashboard__content">
          {table && (
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>Formation</th>
                    <th>Théme</th>
                    <th>Lieux</th>
                    <th>Date</th>
                    <th>Places</th>
                    <th>Difficulté</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* { {data.map((item) => (
            <tr> 
            <td> {item.formation} </td>
            <td> {item.theme} </td>
            <td> {item.lieux} </td>
            <td> {item.date} </td>
            <td> {item.places} </td>
            <td> {item.difficulte} </td>
            <td> <img src={pencil} alt="pencil icon" /><img src={trash} alt="trash icon" /> </td> 
            </tr> 
            
          ))} } */}
                  <tr>
                    <td>dedef</td>
                    <td>frehgefefefrh</td>
                    <td>gqregr</td>
                    <td>qregre</td>
                    <td>gqergr</td>
                    <td>qrgrg</td>
                    <td>
                      <img src={pencil} alt="pencil icon" className="icon" />
                      <img src={trash} alt="trash icon" className="icon" />
                    </td>
                  </tr>
                  <tr>
                    <td>dedef</td>
                    <td>frehgefefefrh</td>
                    <td>gqregr</td>
                    <td>qregre</td>
                    <td>gqergr</td>
                    <td>qrgrg</td>
                    <td>
                      <img src={pencil} alt="pencil icon" className="icon" />
                      <img src={trash} alt="trash icon" className="icon" />
                    </td>
                  </tr>
                  <tr>
                    <td>dedef</td>
                    <td>frehgefefefrh</td>
                    <td>gqregr</td>
                    <td>qregre</td>
                    <td>gqergr</td>
                    <td>qrgrg</td>
                    <td>
                      <img src={pencil} alt="pencil icon" className="icon" />
                      <img src={trash} alt="trash icon" className="icon" />
                    </td>
                  </tr>
                  <tr>
                    <td>dedef</td>
                    <td>frehgefefefrh</td>
                    <td>gqregr</td>
                    <td>qregre</td>
                    <td>gqergr</td>
                    <td>qrgrg</td>
                    <td>
                      <img src={pencil} alt="pencil icon" className="icon" />
                      <img src={trash} alt="trash icon" className="icon" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {!table && (
            <div className="ajouter__formation">
              <h1>Ajouter une formation</h1>
              <form>
                <div className="input__section">
                  <Input name="Title" />
                  <Input name="Théme" />
                </div>
                <div className="input__section">
                  <Input name="Lieux" />
                  <Input name="Nombre de places" />
                </div>
                <div className="input__section">
                  <Input name="Date de debut" />
                  <Input name="Date de fin" />
                </div>
                <div className="input__section">
                  <Input name="Heure de debut" />
                  <Input name="Programme" />
                </div>
                <Button text="Ajouter" bgColor="#FF1481" />
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
