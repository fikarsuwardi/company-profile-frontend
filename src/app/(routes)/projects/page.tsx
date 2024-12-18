import axios from 'axios';
import type { Metadata } from 'next';

// Define the Project interface
interface Project {
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
  Link: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Check out the amazing projects we’ve worked on.',
  openGraph: {
    title: 'Projects - Your Website Name',
    description: 'Check out the amazing projects we’ve worked on.',
    url: 'https://yourwebsite.com/projects',
    images: [
      {
        url: '/images/projects-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Projects Open Graph Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - Your Website Name',
    description: 'Check out the amazing projects we’ve worked on.',
    images: ['/images/projects-twitter-image.jpg'],
  },
};

export default async function ProjectsPage() {
  const strapiUrl = 'http://localhost:1337';

  // Fetch project data
  const projectsRes = await axios.get(`${strapiUrl}/api/projects`);

  // Map the data correctly
  const projects: Project[] = projectsRes.data?.data || [];

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Our Projects</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.length > 0 ? (
          projects.map((project) => (
            <li key={project.id}>
              <h2>{project.Title}</h2>
              {project.Description.map((desc, idx) => (
                <p key={idx}>
                  {desc.children.map((child, childIdx) => (
                    <span key={childIdx}>{child.text}</span>
                  ))}
                </p>
              ))}
              {project.Link ? (
                <a href={project.Link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              ) : (
                <p>No link available for this project.</p>
              )}
            </li>
          ))
        ) : (
          <p>No projects available at this time.</p>
        )}
      </ul>
    </>
  );
}
