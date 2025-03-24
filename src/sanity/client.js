import SanityClientConstuctor from "@sanity/client" 

export const client = SanityClientConstuctor({
    projectId: "ic0o18m6",//kopiert fra sanity
    dataset: "production",
    apiVersion: "v2025-03-24",//Hvilken versjon av groq brukes. Se på Sanity>vision, og skriv inn versjonen valgt der.
    useCdn: false
})