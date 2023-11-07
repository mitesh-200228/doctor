import React from "react";
import InformationCard from "./InformationCard";
import {
  faStethoscope,
  faTruckMedical,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Know your Dr. Praksh</span>
        </h3>
        <p className="info-description">
          <p>
            &bull; Dr. Prakash Bhatt is s a young and dynamic Neurologist in
            Bhavnagar.{" "}
          </p>
          <p>
            &bull; He completed his MD from Nazareth Hospital, Shillong, and his
            DNB in Neurology at Sahyadri Speciality Hospital.
          </p>
          <p>
            &bull; He completed his MD from Nazareth Hospital, Shillong, and his
            DNB in Neurology at Sahyadri Speciality Hospital.
          </p>
          <p>
            &bull; He manages Acute and Chronic Neurological Disorders, such as
            disorders of the Brain, Spine, Nerves and Muscles.
          </p>
          <p>
            &bull; Dr. Prakash is open-minded in his approach and utilises both
            traditional and non-traditional methods of care.
          </p>
          <p>
            &bull; Since beginning his practice, he has strived to go above and
            beyond, taking the time to get to the root of his patient’s problems
            to improve their quality of life.
          </p>
        </p>
      </div>
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Know your Dr. Kirti</span>
        </h3>
        <p className="info-description">
          <p>&bull; Dr Kirti Jalela Bhatt is a clinical neurophysiologist.</p>
          <p>
            &bull; She did her EMG fellowship from Bombay Hospital and Medical
            research centre, Mumbai, under the mentorship of esteemed
            neurophysiologist Dr Khushnuma Mansukhani.
          </p>
          <p>
            &bull; Subsequently she worked as a neurophysiologist in Bombay
            hospital, Mumbai.
          </p>
          <p>&bull; We have an International standard EMG machine.</p>
          <p>
            &bull; In our clinic, we ensure that all EMG and EP studies are done
            by Dr Kirti, not by technicians.
          </p>
          <p>
            &bull; Advantage of special training in this field is reflected in
            test results and proper treatment decisions.
          </p>
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Emergency Care"
          description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Super Specialist"
          description="Neuropathy, General Neurological Diseases, Immunological and Movement Disorders, Multiple Sclerosis, Stroke, Metabolic, Head Injury, Headache, Neuro Infections, Epilepsy, Brain Hemorrhages & Stroke"
          icon={faUserDoctor}
        />

        <InformationCard
          title="General Treatment"
          description="OPD consultation for neurological disorders,
          Nerve Conduction Study (NCS),
          Electromyography (EMG),
          Headache Disorders,
          Epilepsy Treatment,
          Parkinson's Disease treatment,
          Dementia (Memory loss) treatment,
          Electroencephalography (EEG),
          Spinal Cord Disorders,
          Myasthenia Gravis treatment,
          Multiple Sclerosis diagnosis and treatment,
          Neuropathy and Myopathy diagnosis and treatment,
          Stroke ( Paralysis) treatment,
          Thrombolytic Therapy in stroke,
          Loss of balance or Vertigo"
          icon={faStethoscope}
        />
      </div>
    </div>
  );
}

export default Info;
