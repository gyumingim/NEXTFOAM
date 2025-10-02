import { Container } from "../../components/ui/Container"
import Layout from "../../components/Layout"
import Header from "../../components/Header"
import { ImageOverlay } from "../../components/ui/ImageOverlay"

// Import consulting images
const consultingImages = import.meta.glob('../assets/consulting/*', { eager: true, query: '?url', import: 'default' })
const imageUrls = Object.values(consultingImages) as string[]

export default function ConsultPage() {
    const portfolioItems = Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        title: `Project ${i + 1}`,
        category: ['Aerospace', 'Marine', 'Automotive', 'Electronics'][i % 4],
        description: `CFD 해석 및 설계 최적화 프로젝트 ${i + 1}`,
        image: imageUrls[i % imageUrls.length] || imageUrls[0]
    }))

    return (
        <Layout>
            <div className="w-full h-[calc(100vh)] overflow-y-auto scroll-smooth no-scrollbar bg-black">
                <Header />
                
                {/* Fixed Title */}
                <div 
                    className="absolute w-full flex text-center items-center h-full justify-center text-[5rem] font-[800] text-white z-0 pointer-events-none"
                    style={{ 
                        zIndex: 1
                    }}
                >
                    CONSULTING PORTFOLIO
                </div>

                {/* Scroll Down Animation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-1 pointer-events-none">
                    <div className="flex flex-col items-center space-y-2">
                        <div className="w-12 h-12 border-2 bg-white border-white rounded-full flex items-center justify-center pt-[0.5rem]">
                            <svg 
                                className="w-6 h-6 text-black bg-white animate-bounce" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={4} 
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Portfolio Grid */}
                <div className="relative z-10 h-[300%] flex items-end">
                    <Container heightRatio={0} bgColor="none" fullBleed>
                        <div className="grid grid-cols-2 gap-8 px-8 bg-black pb-[5rem] pt-[2rem]">
                            {portfolioItems.map((item) => (
                                <ImageOverlay
                                    key={item.id}
                                    src={item.image}
                                    alt={item.title}
                                    title={item.title}
                                    description={item.description}
                                    aspectRatio="4/3"
                                    className="h-[24rem]"
                                />
                            ))}
                        </div>
                    </Container>
                </div>
            </div>
        </Layout>
    );
}