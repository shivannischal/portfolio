

function Resume(){
    return (
        <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold ">My Resume</h1>
            <p className="text-lg mb-10 ">You can view My Resume by clicking the button below.</p>
            <a 
                href="https://drive.google.com/file/d/14j-nX0BpIe41XFw1WM139sF9dxuwpikH/view?usp=sharing"
                target="_main"
                className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'
            >
                View Resume
            </a>
        </div>
    )
}

function Form(){
    return (
        <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                    <input 
                        type="text"
                        id="firstName"
                        name="firstName"
                        className='w-full border rounded-lg p-2 mt-1'
                    />
                </div>
                <div>
                    <label  htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                    <input 
                        type="text"
                        id="lastName"
                        name="lastName"
                        className='w-full border rounded-lg p-2 mt-1'
                    />
                </div>
            </div>
            <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium mb-2">Phone Number</label>
                <input 
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className='w-full border rounded-lg p-2 mt-1'
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    className='w-full border rounded-lg p-2 mt-1'
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                    id="message"
                    name="message"
                    rows="4"
                    className='w-full border rounded-lg p-2 mt-1'
                />
            </div>
            <div className="mt-8 flex justify-between">
                <button
                    type="submit"
                    className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'
                >
                    Send Message
                </button>
            </div>
        </form>
    )
}

export default function Contact(){
    return (
        <div className="min-screen grid grid-cols-1 lg:grid-cols-2 p-8 lg:p-12 ">
            <div className="p-8 lg:p-12 space-y-8">
                <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
                <p className=" text-lg">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
                </p>
                <div className="flex w-fit gap-6 justify-center">
                    <div>
                        <a href="mailto:nischalshivan@gmail.com" target="_main" ><img src="mail.png" alt="nischalshivan@gmail.com" className="w-9"/></a>
                    </div>
                    <div>
                        <a href="https://linkedin.com/in/shivan-nischal" target="_main" ><img src="linkedin.png" alt="LinkedIn Profile" className="w-8"/></a>
                    </div>
                    <div>
                        <a href="https://github.com/shivannischal" target="_main" ><img src="github.png" alt="Github Profile" className="w-8"/></a>
                    </div>
                </div>
                <Resume />
            </div>
            <div className=" max-w-lg p-8 lg:p-12 shadow-md rounded-xl">
                <Form />
            </div>
        </div>
    )
}