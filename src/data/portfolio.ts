export type Locale = 'en' | 'es';

export type IconName = 'wrench' | 'nodes' | 'grid' | 'database' | 'gear' | 'box' | 'file' | 'shield' | 'code' | 'chart' | 'building' | 'link';

interface ServiceContent { icon: IconName; title: string; problem: string; work: string; outcome: string }
interface ExperienceContent { title: string; collaboration: string; context: string; responsibilities: string[]; contributions: string[]; tags: string[] }
interface ProcessContent { title: string; description: string }
interface ProjectContent { icon: IconName; title: string; summary: string; note?: string; context: string; responsibility: string; solution: string; technical: string; outcome: string; tags: string[] }
interface SkillGroup { title: string; items: string }

export interface PortfolioContent {
	meta: { title: string; description: string };
	nav: { services: string; experience: string; work: string; about: string; contact: string };
	controls: { menuOpen: string; menuClose: string; themeToLight: string; themeToDark: string };
	hero: { availability: string; titleStart: string; titleAccent: string; description: string; viewWork: string; contact: string; technologies: string[]; imageLabel: string };
	services: { eyebrow: string; title: string; description: string; labels: { problem: string; work: string; outcome: string }; items: ServiceContent[] };
	experience: { eyebrow: string; title: string; description: string; labels: { responsibilities: string; contributions: string }; items: ExperienceContent[] };
	process: { eyebrow: string; title: string; description: string; items: ProcessContent[] };
	work: { eyebrow: string; title: string; description: string; viewCaseStudy: string; labels: { context: string; responsibility: string; solution: string; technical: string; outcome: string }; items: ProjectContent[] };
	about: { eyebrow: string; title: string; paragraphs: string[]; skillsLabel: string; skills: SkillGroup[] };
	contact: { eyebrow: string; title: string; description: string; availability: string; email: string; linkedin: string; github: string };
	footer: { builtWith: string; backToTop: string };
}

export const portfolioContent: Record<Locale, PortfolioContent> = {
	en: {
		meta: { title: 'Backend & Full-Stack Developer | Henry Xitimul', description: 'PHP and Laravel development for business applications, MySQL systems, REST APIs, integrations, maintenance, and modernization.' },
		nav: { services: 'Services', experience: 'Experience', work: 'Case studies', about: 'About', contact: 'Contact' },
		controls: { menuOpen: 'Open navigation', menuClose: 'Close navigation', themeToLight: 'Switch to light mode', themeToDark: 'Switch to dark mode' },
		hero: {
			availability: 'Available for freelance projects',
			titleStart: 'Backend / Full-Stack Developer\u00a0for',
			titleAccent: 'Business Applications',
			description: 'I work on internal platforms, workflow systems, data-heavy processes, and integrations built with PHP and MySQL. I help teams extend existing applications and deliver controlled, maintainable changes aligned with real business operations.',
			viewWork: 'View case studies', contact: 'Discuss a project',
			technologies: ['PHP', 'Laravel', 'APIs', 'MySQL', 'Docker', 'Linux'],
			imageLabel: 'Software shaped around business operations',
		},
		services: {
			eyebrow: 'What I can help with', title: 'Engineering support for business-critical systems',
			description: 'Focused services for teams that need to improve an application without losing sight of daily operations.',
			labels: { problem: 'The need', work: 'The work', outcome: 'The outcome' },
			items: [
				{ icon: 'wrench', title: 'Application Maintenance & Modernization', problem: 'A mature PHP application is difficult to change or has accumulated fragile areas.', work: 'Trace existing workflows, fix defects, refactor focused areas, and add features incrementally.', outcome: 'A more stable codebase that is easier and safer to continue evolving.' },
				{ icon: 'nodes', title: 'APIs & Third-Party Integrations', problem: 'Internal systems need dependable data exchange with external services.', work: 'Build REST endpoints and integrations with authentication, validation, synchronization, and explicit error handling.', outcome: 'Integration flows that are clearer to operate, troubleshoot, and maintain.' },
				{ icon: 'grid', title: 'Internal Tools & Business Automation', problem: 'Manual steps, approvals, or document workflows slow down routine work.', work: 'Translate the process into focused tools, background jobs, and practical workflow automation.', outcome: 'Less repetitive handling and a more consistent operational process.' },
				{ icon: 'database', title: 'Performance, Data & Infrastructure', problem: 'Queries, data-heavy tasks, or environments are limiting application reliability.', work: 'Review MySQL access patterns, move long tasks to queues, and improve Docker or Linux environments.', outcome: 'More predictable processing and a delivery setup the team can understand and support.' },
			],
		},
		experience: {
			eyebrow: 'Experience', title: 'Hands-on work across the application lifecycle',
			description: 'Selected areas of hands-on work across business applications, background processing, integrations, and delivery environments.',
			labels: { responsibilities: 'Responsibilities', contributions: 'Contributions' },
			items: [
				{ title: 'Enterprise workflow applications', collaboration: 'Backend / full-stack development', context: 'Financial-sector context — project details summarized', responsibilities: ['Maintain and extend business workflows, approvals, and document handling.', 'Work across application logic, MySQL data, and supporting interfaces.'], contributions: ['Supported structured internal processes in an existing business application.', 'Kept changes focused on operational needs and future maintenance.'], tags: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'] },
				{ title: 'Backend processing & automation', collaboration: 'Backend engineering', context: 'Data-intensive application workflows', responsibilities: ['Design queue-based processing for large files and long-running work.', 'Expose processing status through notifications and monitoring.'], contributions: ['Moved heavy processing outside the web request lifecycle.', 'Improved visibility into background work for application operators.'], tags: ['PHP', 'Queues', 'MySQL', 'Linux'] },
				{ title: 'Service integrations & delivery environments', collaboration: 'API and application delivery work', context: 'Third-party financial services and application infrastructure', responsibilities: ['Integrate REST services with authentication, error handling, and data synchronization.', 'Support reproducible application environments with Docker and Linux.'], contributions: ['Created explicit boundaries for external service communication.', 'Made integration failures easier to identify and handle.'], tags: ['REST APIs', 'Laravel', 'Docker', 'Linux'] },
			],
		},
		process: {
			eyebrow: 'How I work', title: 'Controlled progress, from context to handoff',
			description: 'Existing systems carry business rules that are not always written down. My process starts by understanding them before changing the code.',
			items: [
				{ title: 'Understand the system', description: 'Map the current behavior, business process, dependencies, and constraints with the people who use or maintain it.' },
				{ title: 'Plan a controlled change', description: 'Define a focused scope, identify risk, and choose an approach that fits the existing application.' },
				{ title: 'Implement incrementally', description: 'Make readable changes in reviewable steps and verify the affected workflow as the solution develops.' },
				{ title: 'Document and hand off', description: 'Explain decisions, operational considerations, and what the next developer or team needs to know.' },
			],
		},
		work: {
			eyebrow: 'Selected case studies', title: 'Backend work explained in context',
			description: 'Representative projects showing the problem, engineering contribution, technical approach, and practical result. Sensitive details are intentionally summarized.',
			viewCaseStudy: 'View case study',
			labels: { context: 'Context', responsibility: 'Responsibility', solution: 'Solution', technical: 'Technical decisions', outcome: 'Outcome' },
			items: [
				{ icon: 'building', title: 'Business Workflow Application', summary: 'An internal application supporting business processes, approvals, and document workflows in a financial environment.', note: 'Financial-sector project — details summarized.', context: 'Operational work depended on multiple steps, approvals, and related documents inside an existing application.', responsibility: 'Backend and full-stack work across workflow behavior, application data, and the interfaces supporting the process.', solution: 'Extended the PHP/Laravel application around the established business flow instead of replacing the system wholesale.', technical: 'Kept business rules explicit, worked with the existing MySQL model, and delivered changes in focused increments.', outcome: 'The application continued to support structured approvals and document handling while remaining maintainable for further changes.', tags: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'] },
				{ icon: 'file', title: 'Asynchronous File Processing', summary: 'A queue-based workflow for processing large files without tying the work to a web request.', context: 'Large-file processing was long-running and needed status visibility beyond the initial request.', responsibility: 'Structure the backend workflow for queued execution, application notifications, and monitoring.', solution: 'Moved file work into background jobs and surfaced progress through the application’s notification and monitoring flow.', technical: 'Separated request handling from processing and kept job state connected to MySQL-backed application records.', outcome: 'Heavy processing runs outside the request lifecycle, with clearer visibility into work happening in the background.', tags: ['PHP', 'Queues', 'MySQL', 'Linux'] },
				{ icon: 'link', title: 'API Integration', summary: 'REST integration with third-party financial services, including authentication and data synchronization.', note: 'Financial-service integration — provider details omitted.', context: 'A business application needed to exchange data reliably with an external financial service.', responsibility: 'Implement the service boundary, authentication flow, error handling, and synchronization behavior.', solution: 'Encapsulated REST communication in the Laravel application and handled external responses explicitly.', technical: 'Separated third-party concerns from business logic and used Docker to support a consistent application environment.', outcome: 'External data exchange became part of a defined application flow, with failures easier to identify and handle.', tags: ['PHP', 'REST APIs', 'Laravel', 'Docker'] },
			],
		},
		about: {
			eyebrow: 'About', title: 'Reliable software starts with understanding the operation',
			paragraphs: ["I'm Henry Gustavo Xitimul Az, a backend and full-stack developer focused on internal platforms, workflow-driven systems, APIs, and data-intensive business applications.", 'I am comfortable entering an existing or legacy codebase, learning how it supports day-to-day work, and improving it without treating a rewrite as the default answer.', 'I collaborate by making scope, tradeoffs, and technical decisions clear. My core toolkit is PHP, Laravel, and MySQL, supported by REST APIs, queues, Docker, and Linux where the application requires them.'],
			skillsLabel: 'Core toolkit',
			skills: [{ title: 'Backend', items: 'PHP · GO . JAVA . .NET · Queues' }, { title: 'Data', items: 'MySQL · Data workflows . SQL' }, { title: 'APIs & integrations', items: 'REST · Authentication · Synchronization' }, { title: 'Infrastructure & delivery', items: 'Docker · Linux' }],
		},
		contact: { eyebrow: 'Contact', title: 'Bring the system and the business context', description: 'Get in touch if you need careful maintenance for an existing PHP application, a Laravel feature, an API integration, backend automation, or help making a business system easier to operate and evolve.', availability: 'Open to freelance collaboration', email: 'Email', linkedin: 'LinkedIn', github: 'GitHub' },
		footer: { builtWith: 'Built with Astro.', backToTop: 'Back to top' },
	},
	es: {
		meta: { title: 'Desarrollador Backend y Full-Stack | Henry Xitimul', description: 'Desarrollo PHP y Laravel para aplicaciones empresariales, sistemas MySQL, APIs REST, integraciones, mantenimiento y modernización.' },
		nav: { services: 'Servicios', experience: 'Experiencia', work: 'Casos', about: 'Acerca de mí', contact: 'Contacto' },
		controls: { menuOpen: 'Abrir navegación', menuClose: 'Cerrar navegación', themeToLight: 'Cambiar al modo claro', themeToDark: 'Cambiar al modo oscuro' },
		hero: {
			availability: 'Disponible para proyectos freelance', titleStart: 'Desarrollador Backend / Full-Stack para', titleAccent: 'Aplicaciones Empresariales',
			description: 'Trabajo en plataformas internas, sistemas de flujos, procesos intensivos de datos e integraciones con PHP y MySQL. Ayudo a ampliar aplicaciones existentes y entregar cambios controlados, mantenibles y alineados con la operación real del negocio.',
			viewWork: 'Ver casos de estudio', contact: 'Hablemos de tu proyecto', technologies: ['PHP', 'Laravel', 'APIs', 'MySQL', 'Docker', 'Linux'], imageLabel: 'Software diseñado alrededor de la operación',
		},
		services: {
			eyebrow: 'En qué puedo ayudarte', title: 'Ingeniería para sistemas críticos del negocio', description: 'Servicios enfocados para equipos que necesitan mejorar una aplicación sin perder de vista la operación diaria.',
			labels: { problem: 'La necesidad', work: 'El trabajo', outcome: 'El resultado' },
			items: [
				{ icon: 'wrench', title: 'Mantenimiento y modernización de aplicaciones', problem: 'Una aplicación PHP madura es difícil de cambiar o ha acumulado áreas frágiles.', work: 'Analizo los flujos existentes, corrijo defectos, refactorizo áreas puntuales y agrego funciones gradualmente.', outcome: 'Una base más estable, sencilla y segura de seguir evolucionando.' },
				{ icon: 'nodes', title: 'APIs e integraciones con terceros', problem: 'Los sistemas internos necesitan intercambiar datos de forma confiable con servicios externos.', work: 'Construyo endpoints REST e integraciones con autenticación, validación, sincronización y manejo explícito de errores.', outcome: 'Flujos de integración más claros de operar, diagnosticar y mantener.' },
				{ icon: 'grid', title: 'Herramientas internas y automatización', problem: 'Pasos manuales, aprobaciones o flujos documentales ralentizan el trabajo habitual.', work: 'Traduzco el proceso en herramientas enfocadas, tareas en segundo plano y automatización práctica.', outcome: 'Menos manejo repetitivo y un proceso operativo más consistente.' },
				{ icon: 'database', title: 'Rendimiento, datos e infraestructura', problem: 'Consultas, tareas intensivas o entornos limitan la confiabilidad de la aplicación.', work: 'Reviso accesos a MySQL, traslado tareas largas a colas y mejoro entornos Docker o Linux.', outcome: 'Procesamiento más predecible y un entorno que el equipo puede comprender y mantener.' },
			],
		},
		experience: {
			eyebrow: 'Experiencia', title: 'Trabajo práctico a lo largo del ciclo de la aplicación', description: 'Áreas seleccionadas de trabajo práctico en aplicaciones empresariales, procesamiento en segundo plano, integraciones y entornos de entrega.',
			labels: { responsibilities: 'Responsabilidades', contributions: 'Contribuciones' },
			items: [
				{ title: 'Aplicaciones de flujos empresariales', collaboration: 'Desarrollo backend / full-stack', context: 'Contexto financiero — detalles del proyecto resumidos', responsibilities: ['Mantener y ampliar flujos de negocio, aprobaciones y manejo documental.', 'Trabajar con lógica de aplicación, datos en MySQL e interfaces de apoyo.'], contributions: ['Apoyo a procesos internos estructurados dentro de una aplicación empresarial existente.', 'Cambios enfocados en necesidades operativas y mantenimiento futuro.'], tags: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'] },
				{ title: 'Procesamiento backend y automatización', collaboration: 'Ingeniería backend', context: 'Flujos de aplicación intensivos en datos', responsibilities: ['Diseñar procesamiento basado en colas para archivos grandes y tareas prolongadas.', 'Mostrar el estado del procesamiento mediante notificaciones y monitoreo.'], contributions: ['Traslado del procesamiento pesado fuera del ciclo de la petición web.', 'Mayor visibilidad del trabajo en segundo plano para operadores de la aplicación.'], tags: ['PHP', 'Colas', 'MySQL', 'Linux'] },
				{ title: 'Integraciones y entornos de entrega', collaboration: 'Trabajo de APIs y entrega de aplicaciones', context: 'Servicios financieros de terceros e infraestructura de aplicación', responsibilities: ['Integrar servicios REST con autenticación, manejo de errores y sincronización.', 'Apoyar entornos reproducibles con Docker y Linux.'], contributions: ['Límites explícitos para la comunicación con servicios externos.', 'Fallos de integración más sencillos de identificar y manejar.'], tags: ['APIs REST', 'Laravel', 'Docker', 'Linux'] },
			],
		},
		process: {
			eyebrow: 'Cómo trabajo', title: 'Progreso controlado, desde el contexto hasta la entrega', description: 'Los sistemas existentes contienen reglas de negocio que no siempre están documentadas. Mi proceso comienza por entenderlas antes de modificar el código.',
			items: [{ title: 'Entender el sistema', description: 'Mapeo el comportamiento actual, el proceso de negocio, las dependencias y restricciones con quienes lo usan o mantienen.' }, { title: 'Planear un cambio controlado', description: 'Defino un alcance concreto, identifico riesgos y elijo un enfoque adecuado para la aplicación existente.' }, { title: 'Implementar gradualmente', description: 'Realizo cambios legibles en pasos revisables y verifico el flujo afectado mientras avanza la solución.' }, { title: 'Documentar y entregar', description: 'Explico decisiones, consideraciones operativas y lo que el siguiente desarrollador o equipo necesita saber.' }],
		},
		work: {
			eyebrow: 'Casos de estudio seleccionados', title: 'Trabajo backend explicado en contexto', description: 'Proyectos representativos que muestran el problema, la contribución, el enfoque técnico y el resultado práctico. Los detalles sensibles están resumidos intencionalmente.', viewCaseStudy: 'Ver caso de estudio',
			labels: { context: 'Contexto', responsibility: 'Responsabilidad', solution: 'Solución', technical: 'Decisiones técnicas', outcome: 'Resultado' },
			items: [
				{ icon: 'building', title: 'Aplicación de Flujos Empresariales', summary: 'Aplicación interna para procesos, aprobaciones y flujos documentales dentro de un entorno financiero.', note: 'Proyecto del sector financiero — detalles resumidos.', context: 'El trabajo operativo dependía de múltiples pasos, aprobaciones y documentos relacionados dentro de una aplicación existente.', responsibility: 'Trabajo backend y full-stack sobre el comportamiento del flujo, los datos de aplicación y las interfaces que apoyan el proceso.', solution: 'Ampliación de la aplicación PHP/Laravel alrededor del flujo establecido, sin reemplazar por completo el sistema.', technical: 'Reglas de negocio explícitas, trabajo con el modelo MySQL existente y entrega de cambios en incrementos enfocados.', outcome: 'La aplicación continuó apoyando aprobaciones y manejo documental estructurados, manteniéndose preparada para cambios posteriores.', tags: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'] },
				{ icon: 'file', title: 'Procesamiento Asíncrono de Archivos', summary: 'Flujo basado en colas para procesar archivos grandes sin atar el trabajo a una petición web.', context: 'El procesamiento de archivos grandes era prolongado y necesitaba visibilidad más allá de la petición inicial.', responsibility: 'Estructurar el flujo backend para ejecución en colas, notificaciones de aplicación y monitoreo.', solution: 'Traslado del trabajo a tareas en segundo plano y exposición del progreso mediante notificaciones y monitoreo.', technical: 'Separación entre la petición y el procesamiento, manteniendo el estado conectado con registros de aplicación en MySQL.', outcome: 'El procesamiento pesado se ejecuta fuera de la petición, con mayor visibilidad del trabajo en segundo plano.', tags: ['PHP', 'Colas', 'MySQL', 'Linux'] },
				{ icon: 'link', title: 'Integración de APIs', summary: 'Integración REST con servicios financieros de terceros, incluyendo autenticación y sincronización de datos.', note: 'Integración financiera — proveedor omitido.', context: 'Una aplicación empresarial necesitaba intercambiar datos confiablemente con un servicio financiero externo.', responsibility: 'Implementar el límite del servicio, la autenticación, el manejo de errores y la sincronización.', solution: 'Comunicación REST encapsulada dentro de Laravel y manejo explícito de respuestas externas.', technical: 'Separación de asuntos del proveedor respecto a la lógica de negocio y uso de Docker para un entorno consistente.', outcome: 'El intercambio de datos externos pasó a formar parte de un flujo definido, con fallos más sencillos de identificar y manejar.', tags: ['PHP', 'APIs REST', 'Laravel', 'Docker'] },
			],
		},
		about: {
			eyebrow: 'Acerca de mí', title: 'El software confiable comienza por entender la operación',
			paragraphs: ['Soy Henry Gustavo Xitimul Az, desarrollador backend y full-stack enfocado en plataformas internas, sistemas orientados a flujos, APIs y aplicaciones empresariales intensivas en datos.', 'Me siento cómodo entrando en una base de código existente o heredada, entendiendo cómo apoya el trabajo diario y mejorándola sin asumir que una reescritura es la respuesta predeterminada.', 'Colaboro comunicando con claridad el alcance, las decisiones y sus implicaciones. Mi base técnica es PHP, Laravel y MySQL, apoyada por APIs REST, colas, Docker y Linux cuando la aplicación lo requiere.'],
			skillsLabel: 'Herramientas principales', skills: [{ title: 'Backend', items: 'PHP · GO . JAVA . .NET · Colas' }, { title: 'Datos', items: 'MySQL · Flujos de datos . SQL' }, { title: 'APIs e integraciones', items: 'REST · Autenticación · Sincronización' }, { title: 'Infraestructura y entrega', items: 'Docker · Linux' }],
		},
		contact: { eyebrow: 'Contacto', title: 'Cuéntame sobre el sistema y su contexto', description: 'Escríbeme si necesitas mantenimiento cuidadoso para una aplicación PHP existente, una función en Laravel, una integración de API, automatización backend o ayuda para que un sistema empresarial sea más sencillo de operar y evolucionar.', availability: 'Disponible para colaboración freelance', email: 'Correo', linkedin: 'LinkedIn', github: 'GitHub' },
		footer: { builtWith: 'Creado con Astro.', backToTop: 'Volver arriba' },
	},
};
