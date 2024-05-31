import { Link, Outlet } from "react-router-dom";
import "./styles.css"

const Home = () => {
    return (
      <>
        <main>
          <div className="contenedor">
            <img
              className="image"
              src="https://lh3.googleusercontent.com/fife/ALs6j_GM4_cy06lRxqyqZSHddFCIzeDMan1Hs0Tszqh3hAw50W6SZct4yy35rlWplGAvQcBBXddB0rb8AkiqgrYu6gjcssDkX8iHDhe_8Duyz4QkMnMjZEEgtxI1s-Oy17dFFKstT1dydrbCI6ZLGYghyDlf3hL8MGdnlH4u3TaLUjM6jBKERNXEAwdn1vi93-9DLcP3U3O0siWypg1nZBR1WUseE9eT8ll80wyL8s9KEiSoAPgdSeO51oHNLp2g65UJ-0VD1TihMezM8WeVG1jozd8FOlxDE1nLUWYnaFNEPUwhm2LO7tEqzEbVfHNcjibSxAS2rnfjKvqm76OuI0P0cUhqQ0PhpVcWvQOxJKGGbqmdbws05p5KLBHEKrRYBYMTrYVl7Hvc5SixXQzs8x-yckvSM4xDgvSWZxr5vHPqdr7-mSCrG7IjJvnVuOgJEfMtO0ATogtlamvGo-Wu5PTAqVT5_mxrVqUX3XN8K4-wUeajbsDocZ_u_-9ew1hezMRnjrHxkDnTOn8aRHEytpxX0qizv56ElCnrq8upxswDGPSLMVGLegVSSPnsLk08-AFUBGJSiKGdxA5QtMt7xgZBEJzHCqCWuTsSCCKeNqeYEJnMZTWq34f2TYP9RvsChngp-ZLXFWqeNmBSmHN8kf7HtpDOPz6M1U8xGhRIYCXPq_svk5Ezg-_ahbpcLN0V9IJWqRWtsprIsqaCRGZ3-YxhsLaerDdo2ZF5jvxe-Rk2NRlwqq8tJihlWgkgehqZekRxZxPn0IEspSo1ON7HR9MVFnNBzmONydiTCtDQjKpZd9shnlI-raqlP6xVMMyDJKFQ_01_sg0BOSEbVWBMhFPHLqUk96Zw1OCEETteo0saTFDQ4mtfabl10DKxSt4ax7GOIw_m_SpvIwAzoqFVSqRQniKhrhsa6wE4RHZJbI2f_QtobRTww8odcfWw_QmN4GaqQIYuVY9q11V1Yezw4JBpPtFh00kaI1S_JcVzdZPiAah6YJPHFVuXMd_7xAZfXnp37FQNecx9ZhXyy006M82TZ7G9BDkjqDU-WsIqL4X9uBmzubfDn9nnsLbzAAUZEmecSLgZDiyl3Ow1B7RK9mBvwsnF5jtF-BvZEVGsvkjghxGC9vR9ZzEAFnWF_WD9mdXWL4YjH0yDpZA7ULNlxYDU_xf0IhX9q19FHFhi7e4t-saIFKdiKruAIroPiSxsj7SoP30jS75j2qRnkc6_wSkHIU5sdQYtSmoGjEiCZfXqwQT61qf6jpWW31bDWhAMoO2o7vjWzVxQOzjNHt18vi76GoKXuHakBnZseavX1f8DDd6JSsn5osWxXimlbGTgZLIGztIp2kbOeFoTZBxfgNttYObq5H1FSRMzHSrFvKN2E_3TfTRGeNznlr2O-v-QDWLtUzHy9_IRz_OnBEFPgIRphglKH2IyxL2RLuL4Bvn4QGsJBFzca3eqQzYcWdVKuh-zdAnOFmcCw2k0e3zcRsoDM7_h8JKW_Hh10gPUmoib2E-a-ttKbsyA8DeynN_MS3nef5zRBVjTMw0ZpgU2SOV_Fy2FIq1r_riSKuEiWjcNQ1FWh9w3fc76fg3FrdpCc1ylCe3KyaCafMpLlo0whw=w1920-h838"
              />
            <div className="texto-superpuesto">Todo lo que necesitas para tu hogar</div> 
          </div>
        </main>
        
        <div className="todosaber">
          <p>Aquí encontrarás todo lo que necesita saber para tener un hogar más sustentable.</p>
        </div>
        
        <div>
          <button className="botonproductos">
            <Link to="/productos" className="click">¡A un solo CLICK!</Link>
          </button>
        </div>
  
        <div className="container">
          <div className="card">
            <h1 className="button1">Los más buscados esta semana</h1>
          </div>
          <div className="aca"></div>
          <div className="here"></div>
        </div>
  
        <div className="container2">
          <div className="foto4"></div>
          <div className="foto5"></div>
          <div className="foto6"></div>
        </div>
  
        <div className="mision">
          <img className="image" src="https://lh3.googleusercontent.com/fife/ALs6j_HiDthLmfXbxBBKfyXAX2I4iHhzp_d8rInMdW2saHAyoBnS8b3eZ1rNLZ9TC11hWj9wpNQVVgPpvjTufi4zHiWUbR26_Z8LDOw8Bx0JB5muwkBNOEIizGAAfaK71x0C1g4cKbt6lsu3sJ1pFYs0qjQYwm5o4pflIeAEx_i8wf7eXdQkQBw5fa7bmPFCCy3ihk7tju0qfGEczYGupA-IZjjZypKz-9a6cZvcGxcH1f7Q5EK6djWrhC2erG-xRQw6Mjpu69haHOsHx80u8ej50AOizKemdYlpNKl0TKp06-B0HFKSKDPlqbxr7fkJnV4XsxsYo-r6remw1uIJcj5zBwN__tA9BHu9hTBEO0qovVnAFVPeOC79z1bSd30Htd-3pFL4lu5TZ0q-IzVysJDE8DYCshr48jfg7l_KCiypeqIW3ygCwcUSJ07VTZZ6-20tddKA5-Z-ipsAySR09jQOt5z1rrwRBBjxJuPYCaBOYAXa1B5_6QFu_nvxKQq_xeNtEvUIEpsUfH28TxNE63DOU_TNjCSKypUo1YWqLqTkS8GqastD_vue21QhiSDoPuiuPCui_yzrCBy8beoh8SxYVyqKZtx7kp_hysOBhJUuOo80y7pmC18Vingfd--8mf5Z3dtjd-grkRJ_l8bhbIMdBWYyslwXSgHQlLnH1aGBxgBVIHj7Hk44Xe0CONlrPe38wxKA3ehrYG0xREkqlbyOSQPQSP2FPeunKQpBXjmowvECyKO0H0J6CuW8SeJfQIgdMi2JlKqOaTYqgaEbyVRhewoXBvOfH2y0aCOaw3x86O6JUw6-VkJD2_0sv69V4KZxMbXNWdUt2ASwifFTNoeDNWOuXbzLQ_1rNOj9VcwYHn1GouroreYI0zHfEmpXdDE3cX_1iXqVTItii_u0gNFpc_m9qwNqpm2apWwKsahX-UaMfAoeV1P8vkXVrcd2XE1GQU9AZu91sof0app8IESYzxab4yrGOuBZ68lJbMZDhxtUTdSsiPWEr_VxzhDPDNZ7cKacSdy0wRMNcBssiC13-NBXXdLRyydJgbnGqS60MsfqonmYTtK_oKRSaeYM3KWN9GDSmPirmt-bkw8g-jdI58XWwM5G-RpOOkrYzn7aSpq4jkr-LZz_tO53pWDawaglgEx-B9X8OWURBeZKiNXKqKKbJXQaA1c-BFoaN5LN8qLI1eWVrrEXNATctdA2jMYheNgappvdo7IVZB9b-jGOUI0Si07NPuLoLagCUtOcaQZps_ZXiKongtMdbndp_EgJvVcwhgx-e6356NWCQJOqVQq2zpO8JOdh3pODQaqET2kFzU1TQ3HoSjROQHVkpFTT1zad3BfynrB-x5pytgP3goIbbp1f6riUQePzAE08k-uYa67FDKpSm3r9EpyJomfRDJdRFlfXSsudlU6w2TLHiNnAFmhitN0r2h5By0_qaBw1CjwH3-8sm1y9GFSi3c8ggQCiLoNcLLXLNvliBjPuHLrqXU6TjozwdNuDozSFJW1vW-_clrNraZbEWX6xmcAZ21-0l8jjFHj9XpO-ebW0No4qikzQIB54pn9C6YA6eP5HU9wtClDQVQcDnJ-57eAdQvgH4RG64boIS4sU-w=w1920-h838"/>
          <div className="text-container">
            <h1 className="titulomision">Nuestra Misión</h1>
            <p className="textomision">Ofrecer a los ciudadanos herramientas y recursos para concientizar sobre la reducción de sus consumos energéticos y así poder adoptar prácticas más sostenibles en sus hogares a corto y largo plazo.</p>
            <h1 className="titulomision1">Nuestro Equipo</h1>
            <p className="textomision1">Nuestro equipo de profesionales está dispuesto a dar todo por la causa medioambiental. Promoviendo diversas formas de acercar tu casa a un entorno más eco-friendly.</p>
            <h1 className="titulomision2">Nuestra Historia</h1>
            <p className="textomision2">Nacimos en 2024 como una plataforma web enfocadas en poder dar una solución al Objetivo de Desarrollo Sostenible (ODS) de la ONU.</p>
          </div>
        </div>
  
        <div className="setfotos">
          <img className="image1" src="https://lh3.googleusercontent.com/fife/ALs6j_Fa2DbX75qYPPcOG8uFY6Phkp_Vfxjny0W_umrB8k-4KpFvp1oiNEqalCHcNqunXRhJz2J49FY6eZ065nJ_MR0Y_a4tn4KV8dix8puZlvtgGXWfYcK3yshjMuFRBiEDxlzPP4ltccXKpk24AFrAR8iYPul7KWxVCkvzNs_NTYpcLbkQQmGcqN_WRVgoDyZkbDxsnX57GHhVdp42Idx5L4b8o_pTOu22WZA2-CFdv9_k7WO2qqb4D8ol06H4GZew0Z39joSrhIKgig_xCzg6cjKbhnb5lRMllCWN4RgclAUxau4JV7P_7cfpayus08F99fpcYiLp9j9-18K7tTO9S8P15QvZboYdSaKP48_tT5epIT1PEz9TxV8CCt-H-QfkeWGWKDLdToyVveFSkzQTfNfWqhfK1-17AIFdWp-mjx8-0E20BbVR47kIF3S5JuYhqCU-0Rwdzp3rGIbOZPHV_O5l5bRC_j5pGLnAK-H52t5PFQSYjq5U3OSpy4LHBOST8nA285y3D3WSObw95uahfSGsMfTPjNx1IYMEd02DqeqNyRgpY0xZvHFqHAG4FduaudHjkAWfpHEllXmlA4zf5wBV3wiUWntLtlG06IFTxhSy9BcqcTVWaLLfVsm7LNXyjoXYCDKzMrrNMekV6VW-v1O-JddkeOCn28ib9FW_3Kf6TpgQbotUzO1YRFaImtd_e9ogO1hvNBYN5AbeLzSHrMU734xLqVW_5tvkE9DPPpDo2UEkJuVj1oB7KXW6tCzrS-mOMN_FL6KmDcNXtgrTafGqlLVmr_sUZA3ppGTubiHU2VPZ4wbTZbgUsxGk5C9lnTsS2_EX8vShSKWF4nezd1-1Mej5my2IoVkNk0D7er9YJVIlqnPipGA_ln8bz0h-IuRkhSXDeOM-72F5vDyjtUqShBM10pllFqjkQLqtDTmSnSQAaEgbzAElhxRipXsD06nMQKdtgJyc5bjIIj6OZjz1we__DlvJy9TWuuC_B0X-X4S454Gwa_ndmA_CKDKeX0ltoDwmFhMR5uYDF8uCtsXwXPx4JwA_fjF1np98tScSqA58-h5oW67t2_DNsSX7Dq8aFY4THrnPq1CPyDTMPMV7OlW3yDzWp1jFluUjQuRGp2ikXTaFEwgbTtvN87J04cWr2UQGRzQQoCEOnYbG53F1KRvEQIlvAgfX13U7QvLxawHFjohy9_UjXy9q8TXpjCouLJxhqXvaKPv5D2fJUa14Ff681wMy6q9ziFXqNXAqj3nHrjJigenMGkucrHzQ-6zmPPtc2tmlyegXyxtn_2llzJ5kMfL_xYW3deOauGJrICdXkeYDi5pUSApvXvIiyFUa5IuvzUQ7_AhyFXUA4ppti5GdoTHcr6_tVWYaxeXJxPg8pDpUAtIn8RqQJFURjsssQay_KfWszBj00fHorNcikDru_YZ9GNgxEw_tdmrjYF-KDBiJq01Q_L7839VZMHaCokbhUd8ZIbKmjM81rEqihyx3RbfnOOFXj_LYFTmP2FB9RdRrkLxltDtG-MYHMYO6YLXyyBu7RyALXYEbJ8fLpiK5e2llp-L-zWouxrZHiSLypMxLCRat_nEBY7O--Sme-nLCQXHziPsmdQ=w1920-h838"  />
          <div className="setfotos2">
            <img className="image2" src="https://lh3.googleusercontent.com/fife/ALs6j_GRkuTt9r7p4DmKH3q3jIif1V2zU9YIQdLGGbeqV98YaIDGRah9oJ-dsigVMSo14brSRZk0n8EJRzivxUp3GwsCXVKkfD-ma7HTDC4MIx2pb1bx37hWPcYC-1cvbKA-LcQD9H5L70e_jn9deKGN8VTbv1zWA9lyblxYdRvPAyIE8MTT9s69dGGOh50D5tZuouWZ6IvVNzjqwmCZeYdWki1qWKzPKn3P2HlsFZLVpNqiT-E9vFLNQXZ_U_34EYhCqxNFFM9QIBCREgCcU0AFGq6QtUo6bW3Owfc_oLKZKEh4PrTTFjAL_pxwS9eC59tZNKfx-Qn8wluFBR0flOD7dhQE6ALG_LrMgSgUcqypXwf-HjWLs2pq6bdXbX_Bw1AJN6CKnfXW4ABx9xtX5vOuQ4KDhOsRZNpxNobXzMRyvyUGN0r2vlUKOVXGjGzREs31k0ILe03EwkjwWHUFIrb5dXfjvLy96cjFIkLG8rkXSixPWalhEy8yAgIf4ubwYe4opNrv4kC1eXNyTjHtLt03n9YdFbHPqWO6s2GT-DsiCvGEc16EgGQCedVCgGo67fpEOu-9eMb9djHrMcviDJ_MWoKBn-KGuUI3NuvVebwYd105-P65nZFfWgH4PIAj17qxHBXyW4UXKP2Wl_8pflAXfucK0t18UIOXzfW0_lIZ63eOsz3la9dCUXWHcBk8N8HWxo0G9jlyIGPOh4CsjRARtC_ngsGgCcs79xHdFyUFQN2Nt4w_MkrHqjlJVGMXE34_DJ8Z1jb8F4KaGs8OycYaGvVioy-HGodfHYIKoWXnsLsS7cS0nRXgI9rzLu7Ofy0pZ0p1Ce0wlkFmfNgScX3cC94AY6IycPdY1xXUwCV05yA-bCEnnVuAd1f5Xy-L1StTN1Hbpm2VUm4Kz90zMSwd3SiY8704lcPyktHW3wYwcd6gQrBH_1pg6Th0R8sRGFT09NHhka7KR0qjX9x1Tuf4jgrgDnYfSDVyKAovRyj8D1DKlBg06mhqQZP5U8Lh4sCyudu6AUEcyoqmljnGzsISCuxmJJ5JJy40DPGwNXYmv50u3V5jYA8vf8niNUWfspXYzF77BG1LAVSVeXO9FHvqtnhB3rpjnKxEYHQqmqnPPcQTGDMYDMOWXL_Jb2MH-Clv8kG_F7DexcXgZohf85YWmRGMLCQ0imKgKxuHIM20tyPHhNUNodImIeR7pYK7L4zhC8lAH25J40FAwwZCpU1cVsZTLtKaw5CpLZ59TisAV9fnd664kjM2vloqYweJRHl0l_6qKMTvsSjVJtJQL3dVHlsyRF5e6ynwCb4NAXom6I47fGCz-TIkGHCLeMRqYlevzSAhg894EERbUbCZ4NyATLMLm53tKhBBAeGsAWS9dBRIo_QIIG3mzEua6God1LCE0MqcBWAuNXVRQnwyk679RaGfTkS49IIPqY3Avmpkugovl0asrreXghACCU-mFDyWoBS8sTDmi7e1hS874OTw8coKXS5O_y8NQENGOEl4d1IkjaBV8JGqFuhHRdDRG4yBBld8ryOHNmBunGq5D7Q74vh0GajG7N2966V48UYHtKENlA2gIzWmfw3e_gvu1RFfBFOzVmZ1HA1MFUob6g=w1920-h838"  />
          </div>
        </div>
        
  <div className="focos">
    <img className="imagencalculadora" src="https://lh3.googleusercontent.com/fife/ALs6j_H_Se0y4r911PdrPcxP-V3dJLt-_eGOivQLqgdgzws5wmwLxuwnVkU1qI2DI7l3Hqi0aliyRFW4Tsps1AYRHujd2GjuoIhlEyFoTd_8-6K9Pe-w7oF2Bwy8klp-kq-gbnVYjpIM-4QDri_TM6T2AibY1bWzORWsz5-PXxsLfzizUXMGDpWUjDjb-cKasRc70RZkEZTRj2BNOLbnZ5Sw0A_ttdDTSIvn7nrkbmpHwG2rTL4eUdDJ0eMNFfZCAQHQ4bsCTFNnTw190Psec8Iit6axXz9Z_3grpq0sDxziAh3xbEbsT4L9N0Oe0bslRUhxSpgPg6RzfS2sEBxuP-l6jfJ2WsFxwdGgAj-xz7kbvCk0qnocvfODglEAuaiN903HBLLSv0F7WrG8BV99KfYRTQf890rJACOQbkqgp9w06IwPindTR6iu1hAeSyiUCTx3jwK3aJmt_JN5PKTfLIJtQD9zb29aw7oPqLtDxTLweVxpP6Ycb8KbdXEFs0c--QIEvYADm0SzwUUrOEaaG9qb83nKHi57kmuUNxgmSEqn4WiPFRh_imJapu_rzwcVGlyQaKG20XrQeeuYjq74FyGsqaFNiYNPMUu-7c-kQMaA7i0HEZQCT4tu0uf3cF4KCRYSa-DMZN-CarYG9Xv7DFrzzALd1k2fpynLHjrTVi_Bg3G6xVFv5B4mLxx_0GyjCxyWWTvi6OLo1ANPxOPBxgPeYE2hfehzVyJVVxbNkvwCXmZSDvvWL5JRsKhnUHe61XffihIXF6dmfXhzVmnA8-xLilKfvFkO6-_UwLBhvWHBkQWk2WnzM0ZmWf5bzXXnXxfFWfvNh6BbRSdl4jwM94PG5s_ecEGXLAyt0bl6eSgWImqog67bUwLl8HZCe1uft5dgXT65AS2H2Oj0ofaC5ZrQcTpZg3LiRhgvpwsw1z1p_G7Fpa48fMZgoo_jl3aT-iCiDnneP7DIgt8E-0JZ22f3GUBdn7rasT3nTzB7t2FzCDI0Pc6P0YccgltSdGKY7v3wNiX13CtbH9jxNhS13WE6pKplqQkp6cBanD8Y3QDQ0Nkw9wuNXdi7S1aKQ9FeyZxnLqs56d0phnf7O7oVLSXweYdsbX947xNg6eZOELgno3eklrS0cD9VXJkqkpzOO4Xhyay2fVdBo3S8HxQfpyHckCqPgHpTKcUSYHEZEBLkSKUp8jSK6LouA8EZcb4aSJUhwyYpUJ-t-F7-IOOdQuP27q4pxLlrJ01GUFQXaXlLqZIT6klqVIYRYffZ6Baw2o3BxQIbhtwKFGbEQyejUXTV4AbVXiXGRfLw0LFN6JocGqaKMUxaDTk2h0UV3xZdWpMRy7AL8RcdwCjINzeT_pVlG52R3Y1oQb4MOOMqJ91duxYYgn2iTUTMc_pW6V2DdqmiUBq8uWKgpZy8KFJSX34NLNaSyJowavSQatsThNON9_QrMllUbnky3tw5W9OEp0i3qH1ZczFrzb84TZTgWrVAtjgDZqUkhJ2VOIPJK7H0TNmfVVoa2qfQwi_3Jf_BrkqbPRP4uRE3PKKiXyseZxxVS6sXba0WsjJLkRA3-sHzcVT374XhFHZ3_ba-DNN-22f2tzaZt70IvD62YuNg=w1920-h838" width="100%"/>
    <div className="text-container1">
      <h1 className="calculator">Calcula tu gasto energético</h1>
      <button className="button2">Aqui</button>
    </div>
  </div>
      </>
    );
  };
  
  export default Home;