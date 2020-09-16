<template>
    <div class="signup-card-wrapper px-3">
        <div class="signup-card mx-auto mt-12 mb-12 rounded bg-tb-primary pt-12 max-w-full">
            <p class="signup-title text-22 text-tb-black font-bold mb-4">Dont have an account?</p>
            <div class="flex justify-between mb-5 leading-relaxed">
                <ul class="w-5/12 list-disc text-tb-primary-dark pl-4">
                    <li>Keine Eingabe von Captchern mehr notwändig</li>
                    <li>
                        Überprüfung der Mailadresse bei Preisalarm oder
                        Newsletter entfällt
                    </li>
                    <li>Übersicht aller geschriebenen Meinungen</li>
                </ul>
                <ul class="w-5/12 list-disc text-tb-primary-dark">
                    <li>Einfache Verwaltung ihrer Newsletter</li>
                    <li>Stellen oder beantworten Sie Fragen</li>
                    <li>Verwalten mehrerer Merklisten</li>
                    <li>Ansehen deiner Merkzettel auf mehreren Geräten</li>
                </ul>
            </div>
            <form action="/" method="post">
                <p class="text-tb-black mb-5">
                    Um ein Benutzerkonto für Dich anlegen zu können, benötigen
                    wir die folgenden Daten:
                </p>
                <div class="flex justify-between flex-wrap">
                    <input
                        name="username"
                        type="text"
                        class="form-item placeholder-tb-primary-dark signup-username rounded-full px-8 mb-5 form-input border-transparent"
                        placeholder="Nickname"
                    />
                    <input
                        name="email"
                        type="email"
                        class="form-item placeholder-tb-primary-dark signup-email rounded-full px-8 mb-5 form-input border-transparent"
                        placeholder="E-mail Adresse"
                    />
                    <input
                        name="password"
                        type="password"
                        class="form-item placeholder-tb-primary-dark signup-password rounded-full px-8 mb-5 form-input border-transparent"
                        placeholder="Passwort"
                    />
                    <input
                        name="repassword"
                        type="password"
                        class="form-item placeholder-tb-primary-dark signup-repassword rounded-full px-8 mb-5 form-input border-transparent"
                        placeholder="Passwort Weiderholen"
                    />
                    <div class="form-item flex pt-1">
                        <input
                            type="checkbox"
                            name="agree"
                            id="agree"
                            class="w-4 h-4 form-checkbox rounded-full border-transparent mt-1"
                        />
                        <span class="text-tb-black ml-3 leading-5">
                            ch habe die Datenschutzerklärung gelesen und stimme
                            den Nutzungsbedingungen zu.
                        </span>
                    </div>
                    <button
                        type="submit"
                        class="form-item bg-tb-blue rounded-full py-3 text-center text-lg text-white transition duration-200 hover:bg-tb-blue-dark"
                    >Benutzerkonto erstellen</button>
                </div>
            </form>
            <div
                class="social-signup-wrapper flex justify-between mt-16 pt-10 border-t border-white relative"
            >
                <router-link
                    to="/"
                    class="form-item border-2 border-tb-fb py-3 rounded-full text-center text-tb-fb flex justify-center"
                >
                    <span>
                        <img src="../assets/images/facebook-color.svg" alt />
                    </span>
                    <span class="ml-4">Sign in with Facebook</span>
                </router-link>
                <router-link
                    to="/"
                    class="form-item border-2 border-tb-google py-3 rounded-full text-center text-tb-google flex justify-center"
                >
                    <span>
                        <img src="../assets/images/google-color.svg" alt />
                    </span>
                    <span class="ml-4">Sign in with Google</span>
                </router-link>
                <div
                    class="divider-badge absolute text-tb-primary-dark font-bold px-6 bg-tb-primary"
                >Or</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Signup",
};
</script>

<style scoped>
.signup-card {
    width: 930px;
    padding: 50px;
}
.form-item {
    width: 48%;
}
input.form-item {
    padding-top: 12px;
    padding-bottom: 12px;
}
button.form-item {
    padding-top: 11px;
    padding-bottom: 12px;
}
.divider-badge {
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
