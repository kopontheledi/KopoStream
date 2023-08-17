import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export const Supabase = createClient(
  "https://lmayjliyulorcummcvae.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtYXlqbGl5dWxvcmN1bW1jdmFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA3OTM1NzEsImV4cCI6MjAwNjM2OTU3MX0.bcgkXFf-u5_cpe9OEIkLA49cFFka6CcGNi8KjtXBUDo"
);
export default function Supa() {
  return (
    <Auth
      supabaseClient={Supabase}
      appearance={{ theme: ThemeSupa }}
      theme="dark"
    />
  );
}
