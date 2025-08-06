import { useInView } from '../hooks/useInView'
import laptop from '../assets/icons/laptop.png'
import terminal from '../assets/icons/terminal.png'
import puzzle from '../assets/icons/puzzle.webp'

interface Feature {
    title: string
    description: string
    icon: string
    bgColor: string
}

const features: Feature[] = [
    {
        title: 'Built-In Developer Mode',
        description: 'Test your smart contracts and DApps locally—right inside the wallet.',
        icon: laptop,
        bgColor: 'bg-orange-300',
    },
    {
        title: 'Smart Contract Interaction',
        description: 'Easily connect to smart contracts with pre-built functions and test transactions.',
        icon: terminal,
        bgColor: 'bg-yellow-300',
    },
    {
        title: 'Seamless DApp Listing',
        description: 'Publish your DApp to our in-app marketplace with one click.',
        icon: puzzle,
        bgColor: 'bg-pink-300',
    },
]

export const DevSection: React.FC = () => {
    const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 })

    return (
        <section className="px-1 pt-6 pb-5" ref={ref}>
            <div className="max-w-4xl mx-auto text-center">
                <p className="border border-orange-300 inline-block text-sm px-1 rounded-full bg-orange-200">Developers</p>
                <h2 className={`text-3xl md:text-4xl font-bold my-1 ${inView ? 'slide-in' : ''}`}>
                Developer Tools Section
                </h2>
                <p className={`text-gray-600 mb-4 md:mb-6 ${inView ? 'slide-in' : ''}`}>
                    Build, test and deploy mini apps seamlessly on Pharos, with real-time interaction and local testing inside the wallet.
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {features.map((f) => (
                    <div
                        key={f.title}
                        className="bg-white rounded-xl shadow-md p-1.5 flex flex-col items-start"
                    >
                        <div
                            className={`${f.bgColor} w-3 h-3 rounded-lg mb-1.5 text-white inline-flex items-center justify-center`}
                        >
                            <img className='w-2.5 h-2.5' alt='security_option' src={f.icon} />
                        </div>
                        <h3 className="text-xl font-semibold mb-0.5">{f.title}</h3>
                        <p className="text-gray-500 text-md">{f.description}</p>
                    </div>
                ))}
            </div>

            <div className='my-container flex align-center justify-center pt-2'>
                <button className="relative z-10 px-2.5 py-1 font-semibold cursor-pointer border border-blue-500 hover:bg-blue-500 hover:text-white rounded-2xl bg-transparent text-blue-600 transition">
                    View Documentation
                </button>
            </div>
        </section>
    )
}
