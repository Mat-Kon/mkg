import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div
      className="container"
      style={{ padding: "64px 16px", textAlign: "center" }}
    >
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to="/" style={{ color: "#2563eb" }}>
        На главную
      </Link>
    </div>
  );
}
