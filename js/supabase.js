// Supabase klienta inicializācija
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// ⚠️ Šeit ievieto savus Supabase projekta datus
const supabaseUrl = "https://knpxnqtqxavzkaaqqpni.supabase.co"
const supabaseKey = "sb_publishable_lGQehBv8c3Lc2DaxrME91A_cj1NKD03"
export const supabase = createClient(supabaseUrl, supabaseKey)

// ====== Funkcijas datu apstrādei ======

// Datu ievade (INSERT)
export async function addMessage(name, email, message) {
  try {
    const { data, error } = await supabase
      .from('messages')
      .insert([{ name, email, message }]);

    if (error) {
      console.error("Kļūda saglabājot datus:", error.message);
      alert("Radās kļūda saglabājot datus. Mēģini vēlreiz.");
      return null;
    }

    if (data && data.length > 0) {
      console.log("Saglabāts:", data);
      alert("Ziņa veiksmīgi saglabāta!");
      return data;
    }

    alert("Nezināms rezultāts — pārbaudi datu bāzi.");
    return null;

  } catch (err) {
    console.error("Neapstrādāta kļūda:", err);
    alert("Radās sistēmas kļūda. Mēģini vēlreiz.");
    return null;
  }
}

// Datu izgūšana (SELECT)
export async function getMessages() {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) {
    console.error("Kļūda izgūstot datus:", error.message)
    return []
  }
  return data
}

// Meklēšana pēc e-pasta
export async function searchByEmail(email) {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .eq('email', email)
  if (error) {
    console.error("Kļūda meklējot:", error.message)
    return []
  }
  return data
}
