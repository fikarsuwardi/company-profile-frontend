import axios from 'axios';

// Define the Service interface
interface Service {
  id: number;
  documentId: string;
  Title: string;
  Description: Array<{
    type: string;
    children: Array<{
      type: string;
      text: string;
    }>;
  }>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface CompanyInformation {
  id: number;
  documentId: string;
  Name: string;
  Description: Array<{
    type: string;
    children: Array<{
      type: string;
      text: string;
    }>;
  }>;
  Contact: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export default async function Home() {
  const strapiUrl = 'http://localhost:1337';

  // Fetch data
  const [companyInfoRes, servicesRes] = await Promise.all([
    axios.get(`${strapiUrl}/api/company-informations`),
    axios.get(`${strapiUrl}/api/services`),
  ]);

  // Directly map the `data` array from the response
  const companyInfo: CompanyInformation[] = companyInfoRes.data?.data || [];
  const services: Service[] = servicesRes.data?.data || [];

  return (
    <div>
      <header>
        {companyInfo.length > 0 ? (
          <>
            <h1>{companyInfo[0].Name}</h1>
            {companyInfo[0].Description.map((desc, idx) => (
              <p key={idx}>
                {desc.children.map((child, childIdx) => (
                  <span key={childIdx}>{child.text}</span>
                ))}
              </p>
            ))}
            <p>Contact: {companyInfo[0].Contact}</p>
          </>
        ) : (
          <p>No company information available.</p>
        )}
      </header>

      <section>
        <h2>Our Services</h2>
        <ul>
          {services.length > 0 ? (
            services.map((service) => (
              <li key={service.id}>
                <h3>{service.Title}</h3>
                {service.Description.map((desc, idx) => (
                  <p key={idx}>
                    {desc.children.map((child, childIdx) => (
                      <span key={childIdx}>{child.text}</span>
                    ))}
                  </p>
                ))}
              </li>
            ))
          ) : (
            <p>No services available.</p>
          )}
        </ul>
      </section>
    </div>
  );
}