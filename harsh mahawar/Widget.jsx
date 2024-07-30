export default function Widget() {
    return (
        <!DOCTYPE html>
        <html lang="en">
        <body className="bg-background text-primary-foreground min-h-screen p-8">
            <header className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Harsh Mahawar</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-primary-foreground hover:underline">Projects</a></li>
                        <li><a href="#" className="text-primary-foreground hover:underline">About</a></li>
                        <li><a href="#" className="text-primary-foreground hover:underline">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    <div className="bg-card p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Netflix Data Visualization Dashboard</h3>
                        <p>Aim: Analyzed viewer engagement metrics and content preferences to inform content strategy decisions.</p>
                        <p>Tech: Data Science, Tableau</p>
                        <p>Role: Led a Netflix undefined visualization project, utilizing an interactive dashboard to extract meaningful insights.</p>
                        <p>Learning Outcome: Developed skills in undefined visualization, engagement analysis, and undefineddriven content strategy.</p>
                    </div>
                    
                    <div className="bg-card p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Black Friday Sales Analysis</h3>
                        <p>Aim: Enhanced decision-making by providing insights to optimize marketing strategies and customer targeting during Black Friday events.</p>
                        <p>Tech: Data Science, Python, Jupyter Notebook</p>
                        <p>Role: Conducted an analysis project using Black Friday sales undefined to explore correlations between vundefinedbles such as sales and gender.</p>
                        <p>Learning Outcome: Gained expertise in undefined analysis, correlation exploration, and strategic marketing insights.</p>
                    </div>
                    
                    <div className="bg-card p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Cobbler - An e-commerce Shoe Website</h3>
                        <p>Aim: Enhanced user experience and interaction on an e-commerce shoe website.</p>
                        <p>Tech: UX/UI, Figma (Tool)</p>
                        <p>Role: Designed an e-commerce shoe website using Figma, incorporating a dark mode to attract youth.</p>
                        <p>Learning Outcome: Improved skills in UI/UX design, proficiency in Figma, and understanding of user engagement strategies.</p>
                    </div>
                    
                    <div className="bg-card p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Image Recognizer - Image Identifier</h3>
                        <p>Aim: Developed a machine learning model to detect images based on a undefinedset.</p>
                        <p>Tech: Machine Learning, Python, Keras and TensorFlow</p>
                        <p>Role: Collaborated in a team of three to develop and train a convolutional neural network (CNN) using Keras and TensorFlow.</p>
                        <p>Learning Outcome: Acquired experience in teamwork, machine learning model development, and the use of CNNs with Keras and TensorFlow.</p>
                    </div>
                    
                    <div className="bg-card p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Car Rental System - Frontend</h3>
                        <p>Aim: Facilitated ease of availability of cabs and taxis for users.</p>
                        <p>Tech: Web Development, HTML, CSS, JavaScript</p>
                        <p>Role: Built an app with features including finding suitable cabs, checking fares, planning trips, viewing history, and managing settings, login, and signup.</p>
                        <p>Learning Outcome: Enhanced app development skills, user-centric feature design, and experience in creating comprehensive user interfaces.</p>
                    </div>
                </div>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Education</h2>
                <div className="bg-card p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Lovely Professional University</h3>
                    <p>Current CGPA: 7.20</p>
                </div>
            </section>
            <footer className="text-center text-muted-foreground">
                <p>&copy; 2023 Harsh Mahawar. All rights reserved.</p>
            </footer>
        </body>
        </html>
    )
}