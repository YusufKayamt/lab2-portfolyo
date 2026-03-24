import type { Project } from "../types/project";

const API_URL = "/data/projects.json";

export async function fetchProjects(): Promise<Project[]> {
  try {
    // 1. HTTP isteği gönder
    const response = await fetch(API_URL);
    
    // 2. HTTP durumunu kontrol et
    if (!response.ok) {
      throw new Error(`Projeler yuklenemedi: ${response.status}`);
    }
    
    // 3. JSON'a dönüştür
    const data: Project[] = await response.json();
    return data;
    
  } catch (error) {
    // 4. Hataları yakala (Error Handling)
    console.error("Veri cekme hatasi:", error);
    throw error; // Hatayı UI'da göstermek için yukarı ilet
  }
}