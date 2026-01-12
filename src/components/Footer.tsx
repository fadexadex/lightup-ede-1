const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card/30 px-4 sm:px-6 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-display text-xl sm:text-2xl font-bold text-glow">
          Light Up <span className="gradient-text">Ede</span>
        </p>
        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
          Arise and Shine • Isaiah 60:1
        </p>
        
        {/* Privacy & Cookie Policy */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/50">
          <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-2">Privacy & Cookie Policy</h4>
          <p className="text-[10px] sm:text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We respect your privacy. This site collects minimal data through Google Forms for event registration purposes only. 
            We use essential cookies to ensure basic functionality. By using this site, you consent to our use of cookies. 
            Your information will not be shared with third parties and is used solely for Light Up Ede event coordination.
          </p>
        </div>
        
        <p className="mt-4 sm:mt-6 text-xs text-muted-foreground">
          © 2026 Runtechspace. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
