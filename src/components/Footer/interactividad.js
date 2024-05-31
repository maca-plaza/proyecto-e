<form id="form">
        <Form />
          <div className="subtitulo_formulario">
            <h1>¿Quieres ofrecer tus servicios?</h1>
            <p>Registra tus datos y nos pondremos en contacto contigo</p>
          </div>
          <div className="mb-0">
            <label for="exampleFormControlInput1" class="form-label"></label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="ejemplo@gmail.com"
            />
          </div>
          <div className="mb-0">
            <label for="exampleFormControlTextarea1" class="form-label"></label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              required
              placeholder="Cuéntanos brevemente sobre tus productos"
            ></textarea>
            <button type="submit" class="btn">
              Enviar
            </button>
            <p className="warnings" id="warnings"></p>
          </div>
        </form>


