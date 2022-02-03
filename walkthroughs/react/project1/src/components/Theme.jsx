const Theme = ({ theme, setTheme }) => {
  return (
    <div>
      <select
        name="theme"
        id="theme"
        value={theme}
        onChange={(event) => setTheme(event.target.value)}
      >
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="retro">Retro</option>
        <option value="purple">Purple</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

export default Theme;
