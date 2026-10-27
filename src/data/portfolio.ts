export type Locale = 'en' | 'es';
export type IconName = 'wrench' | 'nodes' | 'grid' | 'database' | 'gear' | 'box' | 'file' | 'shield' | 'code' | 'chart' | 'building' | 'link';

interface ServiceContent { icon: IconName; title: string; description: string }
interface ProcessContent { title: string; description: string }
interface ProjectContent {
	icon: IconName;
	title: string;
	summary: string;
	note: string;
	context: string;
	responsibility: string;
	solution: string;
	technical: string;
	// Include outcomes only when confirmed; omit them for summaries without evidence.
	outcome?: string;
	tags: string[];
}
interface SkillGroup { title: string; items: string }

export interface PortfolioContent {
	meta: { title: string; description: string };
	nav: { services: string; experience: string; work: string; about: string; contact: string };
	controls: { menuOpen: string; menuClose: string; themeToLight: string; themeToDark: string };
	hero: { availability: string; identity: string; eyebrow: string; titleStart: string; titleAccent: string; description: string; viewWork: string; contact: string; imageLabel: string };
	services: { eyebrow: string; title: string; description: string; items: ServiceContent[] };
	experience: { eyebrow: string; title: string; description: string; context: string; responsibilities: string[] };
	process: { eyebrow: string; title: string; description: string; items: ProcessContent[] };
	work: { eyebrow: string; title: string; description: string; viewCaseStudy: string; labels: { context: string; responsibility: string; solution: string; technical: string; outcome: string }; items: ProjectContent[] };
	about: { eyebrow: string; title: string; paragraphs: string[]; skillsLabel: string; skillsDescription: string; skills: SkillGroup[] };
	contact: { eyebrow: string; title: string; description: string; availability: string; email: string; linkedin: string; github: string; portfolio: string };
	footer: { builtWith: string; backToTop: string };
}

export const portfolioContent: Record<Locale, PortfolioContent> = {
	en: {
		meta: { title: 'Backend / Software Engineer | Henry Xitimul', description: 'Henry Gustavo Xitimul Az — backend engineering, APIs, system integration, and business applications. Developing, maintaining, and modernizing reliable software.' },
		nav: { services: 'Expertise', experience: 'Experience', work: 'Selected work', about: 'About', contact: 'Contact' },
		controls: { menuOpen: 'Open navigation', menuClose: 'Close navigation', themeToLight: 'Switch to light mode', themeToDark: 'Switch to dark mode' },
		hero: {
			availability: 'Open to projects & engineering opportunities',
			identity: 'Backend / Software Engineer',
			eyebrow: 'Backend Engineering · Software Architecture · System Integration',
			titleStart: 'Engineering Reliable', titleAccent: 'Backend Systems',
			description: 'I develop and maintain backend applications, APIs, and business systems, with an emphasis on reliability, maintainability, and real-world business requirements.',
			viewWork: 'Explore My Work', contact: 'Let’s Connect',
			imageLabel: 'Software shaped around business needs',
		},
		services: {
			eyebrow: 'Areas of expertise', title: 'Engineering for the systems your business relies on',
			description: 'I help develop, integrate, maintain, and improve business applications, from backend logic to the environments that support them.',
			items: [
				{ icon: 'code', title: 'Backend Engineering', description: 'Develop backend services, business logic, and server-side applications that support everyday operations.' },
				{ icon: 'grid', title: 'Software Architecture', description: 'Structure application components with clear responsibilities and less coupling, so changes are easier to maintain.' },
				{ icon: 'nodes', title: 'APIs & System Integration', description: 'Build REST APIs and connect internal applications with external services, including authentication, validation, and error handling.' },
				{ icon: 'database', title: 'Data & Persistence', description: 'Work with relational data models, SQL queries, and transactions to keep business data consistent and reliable.' },
				{ icon: 'gear', title: 'Asynchronous Processing', description: 'Use background jobs, message queues, and workers for reliable task execution beyond the HTTP request.' },
				{ icon: 'box', title: 'Infrastructure & Delivery', description: 'Support development infrastructure and deployment workflows with containers, Docker, and Linux environments.' },
			],
		},
		experience: {
			eyebrow: 'Professional experience', title: 'Engineering experience in real business environments',
			description: 'My professional experience includes developing and maintaining business applications in financial environments, where changes must fit established rules and day-to-day workflows.',
			context: 'Backend / Software Engineer · Private business systems',
			responsibilities: [
				'Maintain and extend existing applications, including approvals and document workflows.',
				'Implement backend services and business rules around operational requirements.',
				'Integrate APIs and external services with validation and error handling.',
				'Work with relational data, processing workflows, and persistence.',
				'Implement authentication and authorization for application access.',
				'Support background processing with jobs, queues, and status visibility.',
				'Debug existing functionality and introduce focused improvements.',
				'Help software evolve through maintainable changes and reproducible environments.',
			],
		},
		process: {
			eyebrow: 'Engineering approach', title: 'How I approach software engineering',
			description: 'Good technical decisions start with the business context and account for how software will be changed and operated.',
			items: [
				{ title: 'Understand the Problem', description: 'Study business requirements, existing workflows, and constraints before proposing a technical solution.' },
				{ title: 'Design for Maintainability', description: 'Favor clear responsibilities, modular components, and code that another developer can understand and evolve.' },
				{ title: 'Build for Reliability', description: 'Consider validation, error handling, data consistency, and what happens when an operation fails.' },
				{ title: 'Improve Incrementally', description: 'Make focused, reviewable changes, verify affected workflows, and document decisions as the system evolves.' },
			],
		},
		work: {
			eyebrow: 'Selected work', title: 'Backend work explained in context',
			description: 'These summaries describe contributions to private professional systems. They are not public demos; employer, provider, and sensitive implementation details are omitted.',
			viewCaseStudy: 'Explore engineering details',
			labels: { context: 'Context', responsibility: 'My contribution', solution: 'Engineering approach', technical: 'Technical decisions', outcome: 'Outcome' },
			items: [
				{
					icon: 'building', title: 'Business Workflow Systems',
					summary: 'Maintaining and extending an internal financial application around business rules, approvals, and document handling.',
					note: 'Professional experience · Private financial system',
					context: 'An existing application supported operational steps, approvals, and related documents.',
					responsibility: 'Developed and maintained workflow logic, application data, and supporting interfaces.',
					solution: 'Extended the application around its established business processes through focused changes.',
					technical: 'Kept business rules explicit and worked within the existing relational data model to support ongoing maintenance.',
					tags: ['PHP', 'Laravel', 'MySQL'],
				},
				{
					icon: 'file', title: 'Asynchronous File Processing',
					summary: 'Queue-based processing for large files, with job status available beyond the initial web request.',
					note: 'Professional experience · Private application',
					context: 'Long-running file processing needed to run separately from HTTP requests and expose its status.',
					responsibility: 'Implemented the backend flow for queued execution, notifications, and monitoring.',
					solution: 'Moved file processing into background jobs and exposed status through application records and notifications.',
					technical: 'Separated request handling from processing and linked job state to MySQL-backed records.',
					tags: ['PHP', 'Queues', 'MySQL', 'Linux'],
				},
				{
					icon: 'link', title: 'API & Service Integrations',
					summary: 'Connecting a business application with external financial services through authenticated REST communication.',
					note: 'Professional experience · Private financial integration',
					context: 'A business application needed to exchange and synchronize data with a third-party financial service.',
					responsibility: 'Implemented REST communication, authentication, response handling, and data synchronization.',
					solution: 'Encapsulated external communication within the application and handled provider responses explicitly.',
					technical: 'Separated integration concerns from business logic and used Docker for a consistent application environment.',
					tags: ['REST APIs', 'Laravel', 'Docker'],
				},
			],
		},
		about: {
			eyebrow: 'About me', title: 'Henry Gustavo Xitimul Az',
			paragraphs: [
				'I’m a software developer with professional experience in business applications, particularly in financial environments. My focus is backend engineering and the design of reliable, maintainable systems.',
				'I enjoy understanding how an application supports the people who use it, then working through the decisions that help it evolve. I continue learning about system architecture and engineering practices, and value clear communication with both technical teams and business stakeholders.',
			],
			skillsLabel: 'Technologies I work with',
			skillsDescription: 'Tools from my professional work and continued learning. Depth of experience varies by technology; I choose them to fit the application.',
			skills: [
				{ title: 'Backend & application development', items: 'PHP · Laravel · Slim · Go · Java · .NET · Python' },
				{ title: 'Frontend', items: 'JavaScript · TypeScript · Angular · React' },
				{ title: 'Databases & messaging', items: 'MySQL · PostgreSQL · SQL · RabbitMQ' },
				{ title: 'Infrastructure & tooling', items: 'Docker · Linux · Git' },
			],
		},
		contact: {
			eyebrow: 'Contact', title: 'Let’s build something reliable',
			description: 'Have an existing application to improve, an API to integrate, or a backend system to develop? I’m open to discussing freelance collaborations and software engineering opportunities.',
			availability: 'Open to freelance work & engineering roles',
			email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', portfolio: 'Personal portfolio',
		},
		footer: { builtWith: 'Built with Astro.', backToTop: 'Back to top' },
	},
	es: {
		meta: { title: 'Backend / Software Engineer | Henry Xitimul', description: 'Henry Gustavo Xitimul Az — ingeniería backend, APIs, integración de sistemas y aplicaciones empresariales. Desarrollo, mantenimiento y modernización de software confiable.' },
		nav: { services: 'Especialidades', experience: 'Experiencia', work: 'Proyectos', about: 'Sobre mí', contact: 'Contacto' },
		controls: { menuOpen: 'Abrir navegación', menuClose: 'Cerrar navegación', themeToLight: 'Cambiar al modo claro', themeToDark: 'Cambiar al modo oscuro' },
		hero: {
			availability: 'Disponible para proyectos y oportunidades laborales',
			identity: 'Backend / Software Engineer',
			eyebrow: 'Ingeniería Backend · Arquitectura de Software · Integración de Sistemas',
			titleStart: 'Ingeniería de Sistemas', titleAccent: 'Backend Confiables',
			description: 'Desarrollo y mantengo aplicaciones backend, APIs y sistemas empresariales, priorizando la confiabilidad, la mantenibilidad y las necesidades reales del negocio.',
			viewWork: 'Explora mi trabajo', contact: 'Conversemos',
			imageLabel: 'Software alineado con las necesidades del negocio',
		},
		services: {
			eyebrow: 'Áreas de especialidad', title: 'Ingeniería para los sistemas que sostienen tu negocio',
			description: 'Ayudo a desarrollar, integrar, mantener y mejorar aplicaciones empresariales, desde la lógica backend hasta los entornos que las soportan.',
			items: [
				{ icon: 'code', title: 'Ingeniería Backend', description: 'Desarrollo servicios backend, lógica de negocio y aplicaciones del lado del servidor que apoyan la operación diaria.' },
				{ icon: 'grid', title: 'Arquitectura de Software', description: 'Organizo componentes con responsabilidades claras y menor acoplamiento para facilitar el mantenimiento y la evolución.' },
				{ icon: 'nodes', title: 'APIs e Integración de Sistemas', description: 'Desarrollo APIs REST y conecto aplicaciones internas con servicios externos, con autenticación, validación y manejo de errores.' },
				{ icon: 'database', title: 'Datos y Persistencia', description: 'Trabajo con modelos relacionales, consultas SQL y transacciones para preservar la consistencia y la integridad de los datos.' },
				{ icon: 'gear', title: 'Procesamiento Asíncrono', description: 'Utilizo tareas en segundo plano, colas de mensajes y workers para ejecutar procesos de forma confiable fuera de la petición HTTP.' },
				{ icon: 'box', title: 'Infraestructura y Despliegue', description: 'Apoyo la infraestructura de desarrollo y los flujos de despliegue con contenedores, Docker y entornos Linux.' },
			],
		},
		experience: {
			eyebrow: 'Experiencia profesional', title: 'Experiencia con sistemas que apoyan la operación del negocio',
			description: 'Mi experiencia profesional incluye el desarrollo y mantenimiento de aplicaciones empresariales en entornos financieros, donde cada cambio debe responder a reglas establecidas y flujos de trabajo cotidianos.',
			context: 'Backend / Software Engineer · Sistemas empresariales privados',
			responsibilities: [
				'Mantener y ampliar aplicaciones existentes, incluidos flujos de aprobación y manejo documental.',
				'Implementar servicios backend y reglas de negocio según las necesidades operativas.',
				'Integrar APIs y servicios externos con validación y manejo de errores.',
				'Trabajar con datos relacionales, flujos de procesamiento y persistencia.',
				'Implementar autenticación y autorización para el acceso a las aplicaciones.',
				'Apoyar el procesamiento en segundo plano con tareas, colas y seguimiento de estado.',
				'Diagnosticar fallos e introducir mejoras puntuales en funciones existentes.',
				'Contribuir a la evolución del software con cambios mantenibles y entornos reproducibles.',
			],
		},
		process: {
			eyebrow: 'Enfoque de ingeniería', title: 'Cómo abordo el desarrollo de software',
			description: 'Las decisiones técnicas parten del contexto del negocio y consideran cómo se operará y modificará el software.',
			items: [
				{ title: 'Entender el problema', description: 'Analizo los requisitos del negocio, los flujos existentes y sus restricciones antes de proponer una solución técnica.' },
				{ title: 'Diseñar para mantener', description: 'Priorizo responsabilidades claras, componentes modulares y código que otro desarrollador pueda comprender y ampliar.' },
				{ title: 'Construir con confiabilidad', description: 'Considero la validación, el manejo de errores, la consistencia de los datos y qué sucede cuando una operación falla.' },
				{ title: 'Mejorar gradualmente', description: 'Realizo cambios puntuales y revisables, verifico los flujos afectados y documento decisiones conforme evoluciona el sistema.' },
			],
		},
		work: {
			eyebrow: 'Trabajo seleccionado', title: 'Trabajo backend explicado en contexto',
			description: 'Estos resúmenes describen contribuciones profesionales a sistemas privados. No son demos públicas; se omiten datos del empleador, proveedores y detalles sensibles de implementación.',
			viewCaseStudy: 'Explorar detalles de ingeniería',
			labels: { context: 'Contexto', responsibility: 'Mi contribución', solution: 'Enfoque de ingeniería', technical: 'Decisiones técnicas', outcome: 'Resultado' },
			items: [
				{
					icon: 'building', title: 'Sistemas de Flujos Empresariales',
					summary: 'Mantenimiento y ampliación de una aplicación financiera interna con reglas de negocio, aprobaciones y manejo documental.',
					note: 'Experiencia profesional · Sistema financiero privado',
					context: 'Una aplicación existente apoyaba pasos operativos, aprobaciones y documentos relacionados.',
					responsibility: 'Desarrollé y mantuve la lógica de los flujos, los datos de aplicación y las interfaces de apoyo.',
					solution: 'Amplié la aplicación mediante cambios puntuales alineados con los procesos de negocio establecidos.',
					technical: 'Mantuve explícitas las reglas de negocio y trabajé con el modelo relacional existente para facilitar el mantenimiento posterior.',
					tags: ['PHP', 'Laravel', 'MySQL'],
				},
				{
					icon: 'file', title: 'Procesamiento Asíncrono de Archivos',
					summary: 'Procesamiento de archivos grandes mediante colas, con seguimiento del estado más allá de la petición web inicial.',
					note: 'Experiencia profesional · Aplicación privada',
					context: 'El procesamiento prolongado de archivos debía ejecutarse por separado de las peticiones HTTP y permitir consultar su estado.',
					responsibility: 'Implementé el flujo backend para ejecución en colas, notificaciones y monitoreo.',
					solution: 'Trasladé el procesamiento a tareas en segundo plano y expuse su estado mediante registros y notificaciones de la aplicación.',
					technical: 'Separé la atención de peticiones del procesamiento y vinculé el estado de las tareas con registros en MySQL.',
					tags: ['PHP', 'Colas', 'MySQL', 'Linux'],
				},
				{
					icon: 'link', title: 'Integración de APIs y Servicios',
					summary: 'Conexión de una aplicación empresarial con servicios financieros externos mediante comunicación REST autenticada.',
					note: 'Experiencia profesional · Integración financiera privada',
					context: 'Una aplicación empresarial necesitaba intercambiar y sincronizar datos con un servicio financiero de terceros.',
					responsibility: 'Implementé la comunicación REST, la autenticación, el manejo de respuestas y la sincronización de datos.',
					solution: 'Encapsulé la comunicación externa dentro de la aplicación y manejé explícitamente las respuestas del proveedor.',
					technical: 'Separé la integración de la lógica de negocio y utilicé Docker para mantener un entorno de aplicación consistente.',
					tags: ['APIs REST', 'Laravel', 'Docker'],
				},
			],
		},
		about: {
			eyebrow: 'Sobre mí', title: 'Henry Gustavo Xitimul Az',
			paragraphs: [
				'Soy desarrollador de software con experiencia profesional en aplicaciones empresariales, especialmente en entornos financieros. Me enfoco en la ingeniería backend y el diseño de sistemas confiables y mantenibles.',
				'Me interesa comprender cómo una aplicación apoya a las personas que la utilizan y tomar decisiones que faciliten su evolución. Continúo aprendiendo sobre arquitectura de sistemas y prácticas de ingeniería, y valoro la comunicación clara con equipos técnicos y personas del negocio.',
			],
			skillsLabel: 'Tecnologías con las que trabajo',
			skillsDescription: 'Herramientas de mi trabajo profesional y aprendizaje continuo. Mi experiencia varía según la tecnología; las elijo en función de cada aplicación.',
			skills: [
				{ title: 'Backend y desarrollo de aplicaciones', items: 'PHP · Laravel · Slim · Go · Java · .NET · Python' },
				{ title: 'Frontend', items: 'JavaScript · TypeScript · Angular · React' },
				{ title: 'Bases de datos y mensajería', items: 'MySQL · PostgreSQL · SQL · RabbitMQ' },
				{ title: 'Infraestructura y herramientas', items: 'Docker · Linux · Git' },
			],
		},
		contact: {
			eyebrow: 'Contacto', title: 'Construyamos software confiable',
			description: '¿Tienes una aplicación que mejorar, una API que integrar o un sistema backend que desarrollar? Estoy abierto a conversar sobre colaboraciones freelance y oportunidades en ingeniería de software.',
			availability: 'Disponible para proyectos y oportunidades laborales',
			email: 'Correo', linkedin: 'LinkedIn', github: 'GitHub', portfolio: 'Portafolio personal',
		},
		footer: { builtWith: 'Creado con Astro.', backToTop: 'Volver arriba' },
	},
};
