import '@mat3e-ux/switch';
import '@mat3e-ux/stars';
import Stars from "@mat3e-ux/stars/component";

Stars.empty = '💀';
Stars.full = '😄';
customElements.define('m3-emoji', class extends Stars {
});
