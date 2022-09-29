import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Questions() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="text-[#A5C9CA]"
        >
          How React Works?
        </AccordionHeader>
        <AccordionBody className="text-[#A5C9CA]">
          React uses a declarative paradigm that makes it easier to reason about
          your application and aims to be both efficient and flexible. It
          designs simple views for each state in your application, and React
          will efficiently update and render just the right component when your
          data changes.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="text-[#A5C9CA]"
        >
          Difference between props and state?
        </AccordionHeader>
        <AccordionBody className="text-[#A5C9CA]">
          <table className="text-[#A5C9CA]">
            <tbody>
              <tr>
                <td>
                  <p style={{ textAlign: "center" }}>
                    <strong>PROPS</strong>
                  </p>
                </td>
                <td>
                  <p style={{ textAlign: "center" }}>
                    <strong>STATE</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>The Data is passed from one component to another.</td>
                <td>The Data is passed within the component only.</td>
              </tr>
              <tr>
                <td>It is Immutable (cannot be modified).</td>
                <td>It is Mutable ( can be modified).</td>
              </tr>
              <tr>
                <td>Props can be used with state and functional components.</td>
                <td>
                  State can be used only with the state components/class
                  component (Before 16.0).
                </td>
              </tr>
              <tr>
                <td>Props are read-only.</td>
                <td>State is both read and write.</td>
              </tr>
            </tbody>
          </table>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="text-[#A5C9CA]"
        >
          useEffect use cases?
        </AccordionHeader>
        <AccordionBody className="text-[#A5C9CA]">
          useEffect use cases Running once on mount: fetch API data Running on
          state change: validating input field Running on state change: live
          filtering Running on state change: trigger animation on new array
          value Running on props change: update paragraph list on fetched API
          data update Running on props change: updating fetched API data to get
          BTC updated price
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
