"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import s from "./style.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError("Credenciales incorrectas. Inténtalo de nuevo.");
      setLoading(false);
    } else {
      router.push("/");
    }
  }

  return (
    <div className={s.page}>
      <div className={s.card}>
        <div className={s.logo}>
          <Image
            src="/assets/logo_x3.png"
            alt="X3 Padel Club"
            width={64}
            height={64}
            style={{ objectFit: "contain" }}
          />
        </div>
        <h1 className={s.heading}>
          ACCESO <span>X3</span>
        </h1>
        <p className={s.sub}>Área privada</p>
        <div className={s.divider} />

        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.field}>
            <label className={s.label} htmlFor="email">Email</label>
            <input
              id="email"
              className={s.input}
              type="email"
              placeholder="tucorreo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>
          <div className={s.field}>
            <label className={s.label} htmlFor="password">Contraseña</label>
            <input
              id="password"
              className={s.input}
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          {error && <p className={s.errorMsg}>{error}</p>}
          <button className={s.btn} type="submit" disabled={loading}>
            {loading ? "Iniciando sesión..." : "Iniciar sesión"}
          </button>
        </form>
      </div>
    </div>
  );
}
