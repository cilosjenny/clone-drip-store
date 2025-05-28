
// para abrir outra pagina quando clicar (target=_blank)
export const Useful = ({ margin, color, textDecoration, href, value }) => {
  return (
    <p style={{ margin: margin }}>
      <a
        style={{
          color: color,
          textDecoration: textDecoration
        }}
        href={href}
        target="_blank"
      >{value}</a>
    </p>
  );
}