
## Tasks to complete

- Add .ignore file to solution

- 1.1 Lego building - Create components
    - HeroSection component - Structure/font-styles to utilise tailwind 
    - FeatureGrid component - Use Tailwind Grid system  - ensure icons are using Image component shipped with Next
    - ContactForm component - ensure components can be populated
    - InputField component to serve all input fields use props to dynamically build fields
    - Create TS types/interface of cms.data - can be used for task 1.2 

- 1.2 Whos Jason - Dynamic components
    - Utilise components from 1.1 to ensure page is dyamically built using cms.data.ts
    - Require the following component properties/attr to be dynamic - other structural styles can remain as tailwind utility classes
        - HeroSection 
            - Enable background overlay if true
            - Content text and styles (fontSize, color, fontWeight) to be dynamic
        - FeatureGrid
            - Tailwind Grid layout to be utilised
            - make layout styles dynamic eg padding: layout.padding - refer to N1 solution
            - Map over items and populate content (title, description, alignment, icon) dynamically
            - code example to loop through Array - {items.map((item) => { ... })}
        - ContactForm
            - Utilise InputField component to dynamically populate the form by passing attributes via props
            - Require basic validation taken from cms.data