// Supabase klienta inicializācija
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = "https://knpxnqtqxavzkaaqqpni.supabase.co"
const supabaseKey = "sb_publishable_lGQehBv8c3Lc2DaxrME91A_cj1NKD03"
export const supabase = createClient(supabaseUrl, supabaseKey)

// ====== Funkcija datu ievadei ======
export async function addMessage(name, email, message) {
  try {
    const { error } = await supabase
      .from('messages')
      .insert([{ name, email, message }], { returning: 'minimal' }); 
      // returning: 'minimal' – saglabā, bet neatgriež datus, pietiek ar to

    if (error) {
      console.error("Kļūda saglabājot datus:", error.message);
      alert("Radās kļūda saglabājot datus. Mēģini vēlreiz.");
      return null;
    }

    // Tikai viens paziņojums + pāradresācija
    alert("Paldies, dati pieņemti!");
    window.location.href = "dati-pienemti.html";
    return true;

  } catch (err) {
    console.error("Neapstrādāta kļūda:", err);
    // Vairs nerādām alert, tikai logā
    return null;
  }
}
