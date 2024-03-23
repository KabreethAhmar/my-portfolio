import Socials from "./Socials";

const Footer = () => {
    return <footer className="bg-secondary py-12">
        <div className="container mx auto">
            <div className="flex flex-col items-center justify-between">
                {/* Socials */}
                <Socials
                containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
                iconsStyles='text-primary text-[20px] hover:text-black dark:hover:text-primary transition-all' />
                {/* Copyrights */}
                <div className="text-muted-foreground text-[10px]">Copyrights &copy; Kabreeth Ahmar. All rights reserved </div>
            </div>
        </div>
    </footer>
};

export default Footer;