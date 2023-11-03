import React, { useEffect } from 'react';
import '../styles/about.css';

const About = () => {
  useEffect(() => {
    // Initialize Bootstrap components once the component is mounted.
    const carouselElement = document.querySelector('#carouselExample');
    new window.bootstrap.Carousel(carouselElement);

    const accordionElement = document.querySelector('#accordionFlushExample');
    new window.bootstrap.Collapse(accordionElement, { toggle: false });
  }, []);

  return (
    <div>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/800x800/?travel" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/800x800/?beach" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/800x800/?mountain" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Our Mission
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              "At 'Visit India,' our mission is to inspire wanderlust and facilitate unforgettable journeys across the vibrant tapestry of India. We are dedicated to promoting the rich cultural heritage, diverse landscapes, and the warmth of Indian hospitality. Our goal is to empower travelers with comprehensive resources and insights to explore India's myriad wonders with ease and confidence. We aim to make every traveler's experience memorable, transformative, and deeply connected to the heart of this incredible nation. Through our platform, we strive to foster cultural exchange, sustainable tourism, and a lifelong love for exploring the incredible India."
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Our Team
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              Aakash Ranade (Team Lead) - Aakash is the driving force behind 'Visit India.' With his passion for travel and extensive experience in the tourism industry, he leads the team towards achieving the website's goals. His vision and dedication are instrumental in providing travelers with enriching and immersive experiences across India.

              Varun Dixit - Varun is a vital part of our team. His keen eye for design and user experience ensures that your journey on our website is smooth and visually appealing. Varun's creative input enhances the overall aesthetics and functionality of 'Visit India.'

              Abhinav Gawade - Abhinav plays a key role in content creation and management. He's responsible for curating informative and engaging content that helps travelers discover India's treasures. Abhinav's knowledge and writing skills make your exploration of India's culture, history, and destinations informative and enjoyable.

              Together, our dedicated team works tirelessly to make your visit to India a memorable and enriching experience. We're committed to providing you with the best resources and insights for your journey through this incredible country.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Travel Tips for Exploring India
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              Certainly, here's some content for Accordion Item 3, which can be about travel tips for visiting India:

              India is a diverse and culturally rich country, offering a wide range of experiences for travelers. To ensure that your journey through this incredible land is smooth and enjoyable, here are some essential travel tips:

              1. Embrace the Diversity: India is known for its incredible cultural diversity. From the majestic Himalayas in the north to the serene backwaters of Kerala in the south, each region offers a unique experience. Be open to exploring various cultures, traditions, and languages.

              2. Plan Your Itinerary: India is vast, and planning your itinerary is crucial. Whether you're interested in historical sites, natural wonders, or spiritual journeys, create a well-structured plan to make the most of your visit.

              3. Try Local Cuisine: Indian cuisine is renowned worldwide. Don't miss the opportunity to savor authentic dishes like biryani, dosa, butter chicken, and more. Be sure to explore street food, but also exercise caution with food hygiene.

              4. Respect Local Customs: India has a deep-rooted culture with numerous customs and traditions. Respect these customs, including removing your shoes before entering temples, covering up at religious sites, and asking for permission before taking photos of people.

              5. Stay Hydrated: India can get hot, especially during the summer. Carry a reusable water bottle and drink plenty of water to stay hydrated. Be cautious about drinking tap water; opt for bottled or purified water.

              6. Bargain Wisely: Bargaining is a common practice in local markets. While it's expected, remember to do it respectfully. Negotiate with a smile and always be fair.

              7. Stay Health-Conscious: Before your trip, consult a healthcare professional to understand the necessary vaccinations and medications. It's also advisable to carry a basic medical kit for emergencies.

              8. Mind Your Belongings: Keep an eye on your belongings, especially in crowded areas. Use a money belt or hidden pouch to secure your essentials.

               9. Learn Basic Phrases: Learning a few local phrases can go a long way in India. Locals appreciate it when travelers make an effort to communicate in their language.

               10. Connect with Locals: Interacting with locals can lead to memorable experiences. Whether it's a friendly chat with a shopkeeper or joining a local festival, these interactions can be the highlights of your trip.
             </div>
           </div>
         </div>
       </div>
     </div>
  );
};

export default About;
