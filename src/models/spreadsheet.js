const { GoogleSpreadsheet } = require('google-spreadsheet');

async function accessSpreadsheet() {
    const doc = new GoogleSpreadsheet('1tloIdgp49FCRyS2vg6ShKSTw-02f_6Cb9xCXlxfI_YI');
    await doc.useServiceAccountAuth({
        // eslint-disable-next-line no-undef
        client_email: "sheet-288@valued-clarity-292706.iam.gserviceaccount.com",
        // eslint-disable-next-line no-undef
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDLKl7WpUhJ2nhI\nrICrio+5Fmu8F1D8oeNgrWl+BTcZl3EEgVwXgfK4Xwz3Jd7nPh8qG7n5+3uF9QfT\nhcxM83w6ICP5elwBAh0GwnbBzPgOK25PV4CdTSlUo2qVw2l1l5WHDWPSDoCy6Vhh\n0aHH7czCQELKCBk51TyisAQmC3z1kEJ61Hq0dGwl1OoZTl/NtMLcacQv0u2CTMwy\nKfc+MZgGM0VZiLUaR7+rAKad/ToFj3ttKuj0H2c5mEILqskUxnlS0lENpsFEe8sa\nm83wYj8K0StI1aNCeSYebrK1caDabaLw79Mf9IlomXb3fr7CBZxWy43ztU6Xw3jx\n2y1HNua9AgMBAAECggEAXp/xZA+/R4aVl2Og2kTDA/XJX+WMNt4/xPt/ss5DB4xd\neze06M4BepXquAHPe+yXH0miqSfUNGQXrREYQo71QS1PFBdFWsLdOhTAsysALblU\nu2eJ47nYki86qV5GdBqR7kDySRewIaRFIeo9a5z6TU8YzHhRJ3qFr1BD3mRjYwtl\nOOn80AYOo5U6XcVSUeejE9g/WErAK1ppYxqIaUKk8vbxY1ZwjNpi+u+d2iQ/tgDl\nkqO2Zmpe3MKuVlqteogcTzjuXrdB0MPBaAe1FU268KpVKzymcxmJH4sBM2MxfJhR\niCcUerCrZ+joXj35fY33FnWaDPqlyaiLlgmcTk3cEQKBgQDl3uPC2dBzfg3kGTOf\nszmz2plF4weDUntB4yllVAJWdOa6YAMlGJSaQpvWYxuEGk8SbsU006KlVlAxRiUA\n8Z+4insquT8EolD7foGhRwRaFNgogkF2JnnJVb84QoSsPaS7uT0jJs3lK59WFWCo\nDf8h3zTxksHMiQv4YSGY2h9e0wKBgQDiQmAdUWhebKJwwazqYS6hJM9cCyiJ1n5n\nVuuKM1v9YsUKxWP7iCqkrOjIOyHnngU8clwZsMSjgE3GsLb2sOAt2cZP9wd8J71c\nehwCnkXFku4gSMLK/EMGjuHcOC5MaF5fWMVEcGb3xCubxkDpwPITgba+tacHxlXn\nB+igiZbKLwKBgDYaZN8apw5Xz+ss51KiO2WSgNrLGZyWED6subSItlglAZ1CNdtI\nUsmP/d/Sycoo6w16lt3dJf3mN8+xI8p6FE66AU1H9oYfshHPb7FG5sZQ+6NlLQUi\n/y0dCnmyZkmn5JrueW5JltJmlwUK2QoU6UTOpUZqdUSvyOp36hFw3UtTAoGAW1U9\n5TfScKNbozabLXWTVBs+1UHv2ExMdDyjEgOPc6ZmMeXiaUvbIuRlh0ZPdmbUaEUl\npn0zs2h8fOMiyEw4AmoxYmAullCYYPctzWTEd2/LTh7w+u1/xOryg2nuToum5Mg5\nwVm6RvPaQqRx2ao4TeWDtlIvnbTTQlJv9jX0N6MCgYAMvg+Fk/ipds5LP3hP/Mdu\nS3pJ631IiRv1oaMI7pVaEFFAq5p4OfMg9pr8g8IrvgJxBpU0VR4E+Bmvqc9UBsa5\n3SmBfXHRKDJxyWW8mrAzAnQlmCh2yopCUMswKcdxEM1UAXaF32nS7Ls30s7UEVW3\nnlIW9VbOnXQ/lN0j+JLLHA==\n-----END PRIVATE KEY-----\n",
    });
    await doc.loadInfo(); // loads sheets
    return doc;
}

module.exports = {
    accessSpreadsheet
};