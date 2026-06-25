import { useMemo, useRef, useState } from 'react';
import { ArrowLeft, CalendarDays, Download, Search, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap, useGSAP } from './utils/gsap';

const confirmations = [
    { id: 1, name: 'Ana Martínez', guests: 2, message: '¡Nos vemos en la fiesta!', date: '24 jun 2026', time: '7:42 p. m.' },
    { id: 2, name: 'Carlos y Elena', guests: 3, message: 'Gracias por invitarnos.', date: '24 jun 2026', time: '5:18 p. m.' },
    { id: 3, name: 'Familia Rodríguez', guests: 4, message: 'Confirmamos con mucho gusto.', date: '23 jun 2026', time: '9:05 a. m.' },
    { id: 4, name: 'Mariana López', guests: 1, message: '¡Ahí estaré!', date: '22 jun 2026', time: '8:31 p. m.' },
    { id: 5, name: 'Luis Hernández', guests: 2, message: 'Muchas felicidades.', date: '22 jun 2026', time: '1:14 p. m.' },
];

const avatarColors = ['#D6527F', '#7C6EB0', '#3C8D76', '#C9834A', '#557DA8'];

const getInitials = (name) => name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

const DemoRsvpDashboard = () => {
    const dashboardRef = useRef(null);
    const [search, setSearch] = useState('');

    useGSAP(() => {
        const media = gsap.matchMedia();

        media.add({
            desktop: '(min-width: 768px)',
            mobile: '(max-width: 767px)',
            reduceMotion: '(prefers-reduced-motion: reduce)',
        }, (context) => {
            const { desktop, reduceMotion } = context.conditions;
            if (reduceMotion) return;

            const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
            timeline
                .from('.rsvp-demo-notice', { opacity: 0, y: -15, duration: 0.45 })
                .from('.rsvp-demo-stat', {
                    opacity: 0,
                    y: desktop ? 35 : 20,
                    scale: 0.96,
                    duration: desktop ? 0.65 : 0.45,
                    stagger: 0.1,
                }, '-=0.15')
                .from('.rsvp-demo-panel', {
                    opacity: 0,
                    y: desktop ? 45 : 25,
                    duration: desktop ? 0.7 : 0.5,
                }, '-=0.25')
                .from('.rsvp-demo-row', {
                    opacity: 0,
                    x: desktop ? -22 : -10,
                    duration: desktop ? 0.45 : 0.32,
                    stagger: 0.07,
                }, '-=0.3');

            dashboardRef.current?.querySelectorAll('[data-count]').forEach((element) => {
                const target = Number(element.dataset.count);
                const counter = { value: 0 };
                gsap.to(counter, {
                    value: target,
                    duration: desktop ? 1.1 : 0.75,
                    delay: 0.2,
                    ease: 'power2.out',
                    onUpdate: () => {
                        element.textContent = Math.round(counter.value);
                    },
                });
            });
        });

        return () => media.revert();
    }, { scope: dashboardRef });

    const filtered = useMemo(() => {
        const term = search.trim().toLowerCase();
        if (!term) return confirmations;
        return confirmations.filter((item) =>
            item.name.toLowerCase().includes(term) ||
            item.message.toLowerCase().includes(term)
        );
    }, [search]);

    const totalGuests = confirmations.reduce((total, item) => total + item.guests, 0);

    return (
        <main ref={dashboardRef} className="min-h-screen bg-[#f8f9fa] text-[#202124]">
            <header className="border-b border-gray-200 bg-white">
                <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
                    <div className="flex items-center gap-3">
                        <Link
                            to="/"
                            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-invita-heart"
                            aria-label="Volver a la página principal"
                        >
                            <ArrowLeft size={20} />
                        </Link>
                        <div>
                            <h1 className="font-semibold">Panel de confirmaciones</h1>
                            <p className="text-xs text-gray-500">Ejemplo demostrativo · datos ficticios</p>
                        </div>
                    </div>
                    <button
                        type="button"
                        disabled
                        title="Disponible en los paneles reales"
                        className="hidden items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-400 sm:flex"
                    >
                        <Download size={16} /> Exportar
                    </button>
                </div>
            </header>

            <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
                <div className="rsvp-demo-notice mb-6 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-800">
                    Esta pantalla usa información inventada. Los paneles de clientes reales están protegidos con una clave privada.
                </div>

                <section className="mb-6 grid gap-4 sm:grid-cols-2">
                    <div className="rsvp-demo-stat flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                            <CalendarDays size={23} />
                        </div>
                        <div>
                            <p className="text-3xl font-bold" data-count={confirmations.length}>{confirmations.length}</p>
                            <p className="text-sm text-gray-500">Confirmaciones recibidas</p>
                        </div>
                    </div>
                    <div className="rsvp-demo-stat flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                            <Users size={23} />
                        </div>
                        <div>
                            <p className="text-3xl font-bold" data-count={totalGuests}>{totalGuests}</p>
                            <p className="text-sm text-gray-500">Personas confirmadas</p>
                        </div>
                    </div>
                </section>

                <section className="rsvp-demo-panel overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                    <div className="flex flex-col gap-4 border-b border-gray-200 p-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="font-semibold">Lista de invitados confirmados</h2>
                            <p className="mt-1 text-xs text-gray-500">Las respuestas aparecen automáticamente.</p>
                        </div>
                        <label className="relative block sm:w-72">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={17} />
                            <span className="sr-only">Buscar confirmación</span>
                            <input
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                                placeholder="Buscar invitado"
                                className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                            />
                        </label>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[720px] text-left text-sm">
                            <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
                                <tr>
                                    <th className="px-6 py-3 font-medium">Invitado</th>
                                    <th className="px-6 py-3 font-medium">Personas</th>
                                    <th className="px-6 py-3 font-medium">Mensaje</th>
                                    <th className="px-6 py-3 font-medium">Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((item) => (
                                    <tr key={item.id} className="rsvp-demo-row border-t border-gray-100 hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <span
                                                    className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-white"
                                                    style={{ backgroundColor: avatarColors[(item.id - 1) % avatarColors.length] }}
                                                >
                                                    {getInitials(item.name)}
                                                </span>
                                                <span className="font-medium">{item.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex min-w-8 justify-center rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700">
                                                {item.guests}
                                            </span>
                                        </td>
                                        <td className="max-w-xs px-6 py-4 text-gray-600">{item.message}</td>
                                        <td className="px-6 py-4">
                                            <span className="block whitespace-nowrap">{item.date}</span>
                                            <span className="text-xs text-gray-400">{item.time}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {filtered.length === 0 && (
                            <p className="px-6 py-12 text-center text-sm text-gray-500">No se encontraron resultados.</p>
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default DemoRsvpDashboard;
