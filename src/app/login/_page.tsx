export default function Page() {
  return (
    <div>
      <h1>Comércio de fios de cabos LTDA</h1>
      <form>
        <div>
          <label htmlFor="id_user">Usuário</label>
          <input type="text" name="user" id="id_user" />
        </div>
        <div>
          <input type="password" name="password" />
          <input type="submit" value="Entrar" />
        </div>
      </form>
    </div>
  );
}
