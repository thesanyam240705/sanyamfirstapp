import React from 'react';
import './App.css';
import './pictures/clinics.webp'
import clinic1 from './pictures/clinic1.jpg';
import clinic2 from './pictures/clinic2.jpg';
import clinic3 from './pictures/clinic3.jpg';
import clinic4 from './pictures/clinics.webp'

function ClinicCard(props) {
  return (
    <div className="clinic-card">
      <h2>{props.name}</h2>
      <p>Address: {props.address}</p>
      <p>Contact: {props.contact}</p>
      <p>Services: {props.services}</p>
      <p>Working Hours: {props.workingHours}</p>
      <button className="book-appointment-btn" onClick={() => props.toggleForm(props.id)}>Book Appointment</button>
      <form className="appointment-form" id={props.id} onSubmit={() => props.submitAppointment(props.id)}>
        <label htmlFor="date">Preferred Date:</label>
        <input type="date" id="date" name="date" required />
        <label htmlFor="time">Preferred Time:</label>
        <input type="time" id="time" name="time" required />
        <button type="submit">Submit Appointment</button>
      </form>
    </div>
  );
}

function App() {
  const clinics = [
    {
      id: 'mayoMedical',
      name: 'Mayo Medical Centre',
      address: 'Vikas Khand, Gomti Nagar, Lucknow',
      contact: '(555) 123-4567',
      services: 'General Medicine, Pediatrics',
      workingHours: 'Mon-Fri 9:00 AM - 6:00 PM'
    },
    {
      id: 'apolloClinic',
      name: 'Apollo Clinic Lucknow',
      address: 'Jahangirbad Palace, Hazratganj, Lucknow',
      contact: '(555) 987-6543',
      services: 'Internal Medicine, Cardiology',
      workingHours: 'Mon-Sat 8:00 AM - 7:00 PM'
    },
    
    {
      id: 'healthyLife',
      name: 'HealthyLife Family Clinic',
      address: 'Laulai, Gomti Nagar, Lucknow',
      contact: '(555) 567-8901',
      services: 'Dermatology, Gynecology',
      workingHours: 'Mon-Thu 10:00 AM - 8:00 PM, Fri 10:00 AM - 6:00 PM'
    },
    {
      id: 'sunriseHealth',
      name: 'Sunrise Health Clinic',
      address: '123 ABC Street, Gomti Nagar, Lucknow',
      contact: '(555) 789-0123',
      services: 'Orthopedics, Neurology',
      workingHours: 'Mon-Fri 8:00 AM - 6:00 PM'
    },
    {
      id: 'greenLeaf',
      name: 'Green Leaf Wellness Center',
      address: '456 XYZ Road, Aliganj, Lucknow',
      contact: '(555) 234-5678',
      services: 'Naturopathy, Alternative Medicine',
      workingHours: 'Mon-Sat 9:00 AM - 7:00 PM'
    },
    {
      id: 'royalCare',
      name: 'Royal Care Hospital',
      address: '789 PQR Avenue, Indira Nagar, Lucknow',
      contact: '(555) 345-6789',
      services: 'Surgery, Oncology',
      workingHours: 'Mon-Sun 24/7'
    },
  ];

  function toggleForm(clinicId) {
    const form = document.getElementById(clinicId);
    form.style.display = (form.style.display === "none" || form.style.display === "") ? "block" : "none";
  }

  function submitAppointment(clinicId) {
    const form = document.getElementById(clinicId);
    const date = form.elements['date'].value;
    const time = form.elements['time'].value;

    alert('Appointment booked for ' + date + ' at ' + time);

    form.reset();
    form.style.display = "none";
  }

  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-6 logo-container">
              <h1>Clinics in Lucknow</h1>
            </div>
            <div className="col-md-6 text-md-center ">
              <h2>Find trusted healthcare services in Lucknow</h2>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="row">
            {clinics.slice(0, 3).map(clinic => (
              <div className="col-md-4" key={clinic.id}>
                <ClinicCard
                  id={clinic.id}
                  name={clinic.name}
                  address={clinic.address}
                  contact={clinic.contact}
                  services={clinic.services}
                  workingHours={clinic.workingHours}
                  toggleForm={toggleForm}
                  submitAppointment={submitAppointment}
                />
              </div>
            ))}
          </div>
          <div className="col-md-12 text-center">
  <div className="center-image">
    <img src={clinic4} alt="Center Image" style={{ width: '100%', height: 'auto' }} />
  </div>
</div>



          <div className="row">
            {clinics.slice(3).map(clinic => (
              <div className="col-md-4" key={clinic.id}>
                <ClinicCard
                  id={clinic.id}
                  name={clinic.name}
                  address={clinic.address}
                  contact={clinic.contact}
                  services={clinic.services}
                  workingHours={clinic.workingHours}
                  toggleForm={toggleForm}
                  submitAppointment={submitAppointment}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <section id="featured-services">
          <h2 className="main-title">Featured Services</h2>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="service-card">
                  <h3>Diagnostic Imaging</h3>
                  <p>State-of-the-art imaging services for accurate diagnosis.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-card">
                  <h3>Preventive Care</h3>
                  <p>Comprehensive preventive healthcare plans for a healthier life.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-card">
                  <h3>Specialized Treatments</h3>
                  <p>Advanced treatments tailored to your unique healthcare needs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      <footer>
        &copy; 2023 Clinics in Lucknow
      </footer>
      <section id="gallery">
        <h2 className="main-title">Clinic Gallery</h2>
        <div className="row">
          <div className="col-md-4">
            <img src={clinic1} alt="Clinic Image 1" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <img src={clinic2} alt="Clinic Image 2" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <img src={clinic3} alt="Clinic Image 3" className="img-fluid" />
          </div>
        </div>
      </section>
  
    </div>
  
  );
}

export default App;
