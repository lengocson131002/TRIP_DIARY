import classNames from "classnames";
import styles from "./settingprofile.module.css"
export default function SettingProfile() {
    return (
        <div id={styles.app}>
            <div id="snippet--flashes" />
            <div className={styles.pageContent}>
                <div className={styles.accountPage}>
                    <div className={styles.container}>
                        <div className={styles.flexAccount}>
                            <aside className={styles.menuAside}>
                                <div className={styles.bcg} />
                                <ul>
                                    <li className={styles.active}><a href="/account/account"><span className={styles.barOfSpan}><img src="https://www.worldee.com/images/asideucet.svg" alt="Můj účet" /></span><label> My account </label> </a></li>
                                    <li><a className={styles.barOfa} href="/account/social-networks"><span className={styles.barOfSpan}><img src="https://www.worldee.com/images/asidesocsite.svg" alt="Sociální sítě" /></span> <label>Social media </label> </a></li>
                                    <li><a className={styles.barOfa} href="/account/private"><span className={styles.barOfSpan}><img src="https://www.worldee.com/images/asidesoukromi.svg" alt="Soukromí" /></span> <label>Privacy </label> </a></li>
                                    <li><a className={styles.barOfa} href="/account/change-password"><span className={styles.barOfSpan}><img src="https://www.worldee.com/images/asideheslo.svg" alt="Změna hesla" /></span><label> Password change</label> </a></li>
                                    <li><a className={styles.barOfa} href="/account/notify-settings"><span className={styles.barOfSpan}><img src="https://www.worldee.com/images/asideupozorneni.svg" alt="Upozornění" /></span> <label>Notifications </label> </a></li>
                                    <li><a className={styles.barOfa} href="/account/premium-account"><span className={styles.barOfSpan}><img src="https://www.worldee.com/images/asidepremium.svg" alt="Premiová verze" /></span> <label>Premium version </label> </a></li>
                                    <li><a className={styles.barOfa} href="/account/payments"><span className={styles.barOfSpan}><img src="https://www.worldee.com/images/wallet.svg" alt="Platby" /></span>
                                        <label>Payments </label> </a></li>
                                    <li><a className={styles.barOfa} href="/account/referral"><span className={styles.barOfSpan}><img src="https://www.worldee.com/images/asidereferral.svg" alt="Referral" /></span> <label>Referral </label> </a></li>
                                    <li><a className={styles.barOfa} href="/sign/out"><span className={styles.barOfSpan}><img src="https://www.worldee.com/images/asideodhlasitse.svg" alt="Odhlásit se" /></span> <label>Log out</label> </a></li>
                                </ul>
                            </aside>
                            <div className={styles.accountPageContent}>
                                <div className={styles.titleHeader}>
                                    <h1> My Account</h1>
                                    <div className="spinner-master">
                                        <input type="checkbox" id="spinner-form" />
                                        <label htmlFor="spinner-form" className="spinner-spin">
                                            <span className="spinner diagonal part-1" />
                                            <span className="spinner horizontal" />
                                            <span className="spinner diagonal part-2" />
                                        </label>
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.inputs}>
                                        <div className={styles.row}>
                                            <form action="/account/account" method="post" className="ajax form-send" encType="multipart/form-data" id="frm-changePhotosForm">
                                                <div className={classNames(`${styles.boxInput}`, `${styles.w20}`, `${styles.specialwidth}`)}>
                                                    <div className={styles.imageHandler} id={styles.profilePhotoThumbnail}><img src="https://wrld-se-prod.b-cdn.net/images/user-empty.svg" alt="nahraneuzivatel" className={styles.thumbnail} /></div>
                                                    <button id="profil-foto" className={styles.upravitnahratsmazat} type="button" name="button"><img src="https://www.worldee.com/images/upravitimg.svg" alt="Upravit" /></button>
                                                    <div id="foto-modal" className={styles.modalFoto}>
                                                        <div className={styles.fileInputWrapper}>
                                                            <label htmlFor="profilovyobrazek" className={styles.btnFileInput}> Load photo
                                                            </label>
                                                            <input id="profilovyobrazek" type="file" name="profilovyobrazek" />
                                                        </div>
                                                        <div className={styles.vybrSmazatFotkuat}><a href="/account/account?do=removeProfilePhoto"> Remove photo
                                                        </a></div>
                                                    </div>
                                                </div>
                                                <div className={classNames(`${styles.boxInput}`, `${styles.w80}`, `${styles.specialwidth}`)}>
                                                    <div className={styles.imageHandler} id={styles.introPhotoThumbnail}><img src="https://wrld-se-prod.b-cdn.net/images/bezfotky.png" alt="nahranafotka" className={styles.thumbnail} /></div>
                                                    <button id="profil-banner" className={styles.upravitnahratsmazat} type="button" name="button"><img src="https://www.worldee.com/images/upravitimg.svg" alt="Upravit" /></button>
                                                    <div id="banner-modal" className={styles.modalFoto}>
                                                        <div className={styles.fileInputWrapper}>
                                                            <label htmlFor="uvodnifoto" className={styles.btnFileInput}> Load photo
                                                            </label>
                                                            <input id={styles.uvodnifoto} type="file" name="uvodnifoto" className={styles.btnFileInput} />
                                                        </div>
                                                        <div className="vybrat-smazat-fotku"><a href="/account/account?do=removeIntroPhoto"> Remove
                                                            photo</a></div>
                                                    </div>
                                                </div>
                                                <input type="hidden" name="profilovyhidden" id="profilovy-hidden" defaultValue /><input type="hidden" name="uvodnihidden" id="uvodni-hidden" defaultValue /><input type="hidden" name="_do" defaultValue="changePhotosForm-submit" />

                                            </form>
                                            <form action="/account/account" method="post" id="frm-accountForm">
                                                <div className={classNames(
                                                    `${styles.boxInput}`, `${styles.mt40}`, `${styles.w100}`
                                                )} >
                                                    <label htmlFor="vystupovat">Appear on Worldee : </label>
                                                    <div id="vystupovat-select" className={styles.customSelect} ajax-val={1}>
                                                        <div className={styles.selected}>
                                                            <p> Under the name</p>
                                                        </div>
                                                        <div className={styles.selectOptions}>
                                                            <div className={styles.selectOption} ajax-val={1}>
                                                                <p> Under the name</p>
                                                            </div>
                                                            <div className={styles.selectOption} ajax-val={2}>
                                                                <p>Under the nickname</p>
                                                            </div>
                                                            <input type="hidden" name="vystupovat" id="vystupovat-hidden" defaultValue={1} />
                                                        </div>
                                                    </div>
                                                    <p className={styles.info}> Your profile is under the link : <a href="/longpc">https://www.worldee.com/longpc</a></p>
                                                </div>
                                                <div className={classNames(
                                                    `${styles.boxInput}`, `${styles.mt60}`
                                                )}>
                                                    <label htmlFor="prezdivka"> Nickname </label>
                                                    <div className={styles.input}>
                                                        <input id="prezdivka" name="prezdivka" defaultValue="Longpc" required type="text" data-nette-rules="[{&quot;op&quot;:&quot;:filled&quot;,&quot;msg&quot;:&quot;This field is required.&quot;}]" />
                                                        <span data-tooltip="Public"><i /><img src="https://www.worldee.com/images/verejne.svg" alt="veřejné" /></span>
                                                    </div>
                                                </div>
                                                <div className="clearfix" />
                                                <div className={styles.boxInput}>
                                                    <label htmlFor="vasejmeno"> Name </label>
                                                    <div className={styles.input}>
                                                        <input id="vasejmeno" type="text" name="vasejmeno" defaultValue="Long" />
                                                        <span data-tooltip="Public"><i /><img src="https://www.worldee.com/images/verejne.svg" alt="veřejné" /></span>
                                                    </div>
                                                </div>
                                                <div className={styles.boxInput}>
                                                    <label htmlFor="prijmeni"> Surname </label>
                                                    <div className={styles.input}>
                                                        <input id="prijmeni" type="text" name="prijmeni" defaultValue="Trần" />
                                                        <span data-tooltip="Public"><i /><img src="https://www.worldee.com/images/verejne.svg" alt="veřejné" /></span>
                                                    </div>
                                                </div>
                                                <div className={styles.boxInput}>
                                                    <label htmlFor="email"> Email </label>
                                                    <div className={styles.input}>
                                                        <input id="email" type="email" name="email" defaultValue="longnlp14@gmail.com" required data-nette-rules="[{&quot;op&quot;:&quot;:filled&quot;,&quot;msg&quot;:&quot;This field is required.&quot;},{&quot;op&quot;:&quot;:email&quot;,&quot;msg&quot;:&quot;Please enter a valid email address.&quot;}]" />
                                                        <span data-tooltip=" Private"><i /><img className={styles.private} src="https://www.worldee.com/images/soukrome.svg" alt="soukromé" /></span>
                                                    </div>
                                                </div>
                                                <div className={styles.boxInput}>
                                                    <label htmlFor="telefon"> Telephone number</label>
                                                    <div className={styles.input}>
                                                        <input id="telefon" type="tel" name="telefon" defaultValue />
                                                        <span data-tooltip=" Private"><i /><img className={styles.private} src="https://www.worldee.com/images/soukrome.svg" alt="soukromé" /></span>
                                                    </div>
                                                </div>
                                                <div className={styles.boxInput}>
                                                    <label htmlFor="mesto"> City </label>
                                                    <div className={styles.input}>
                                                        <input id="mesto" type="text" name="mesto" autoComplete="off" defaultValue className="pac-target-input" placeholder="Enter a location" />
                                                        <div className={styles.selectBox} id="visible-city-select" ajax-val={1}>
                                                            <i></i>
                                                            <div className={styles.selected}>
                                                                <p data-tooltip="Public"><img src="https://www.worldee.com/images/verejne.svg" alt="veřejné" /> Public </p>
                                                            </div>
                                                            <div className={styles.selectOptions}>
                                                                <div className={styles.selectOption} ajax-val={1}>
                                                                    <p data-tooltip="Public"><img src="https://www.worldee.com/images/verejne.svg" alt="veřejné" /> Public </p>
                                                                </div>
                                                                <div className={styles.selectOption} ajax-val={0}>
                                                                    <p data-tooltip="  Private"><img className={styles.private} src="https://www.worldee.com/images/soukrome.svg" alt="soukromé" />
                                                                        Private</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.boxInput}>
                                                    <label htmlFor="stat"> Country </label>
                                                    <div className={styles.input}>
                                                        <select name="stat" id={styles.stat}>
                                                            <option value="0">-</option>
                                                            <option value="AF">Afghanistan</option>
                                                            <option value="AX">Aland Islands</option>
                                                            <option value="AL">Albania</option>
                                                            <option value="DZ">Algeria</option>
                                                            <option value="AS">American Samoa</option>
                                                            <option value="AD">Andorra</option>
                                                            <option value="AO">Angola</option>
                                                            <option value="AI">Anguilla</option>
                                                            <option value="AQ">Antarctica</option>
                                                            <option value="AG">Antigua and Barbuda</option>
                                                            <option value="AR">Argentina</option>
                                                            <option value="AM">Armenia</option>
                                                            <option value="AW">Aruba</option>
                                                            <option value="AU">Australia</option>
                                                            <option value="AT">Austria</option>
                                                            <option value="AZ">Azerbaijan</option>
                                                            <option value="BS">Bahamas</option>
                                                            <option value="BH">Bahrain</option>
                                                            <option value="BD">Bangladesh</option>
                                                            <option value="BB">Barbados</option>
                                                            <option value="BY">Belarus</option>
                                                            <option value="BE">Belgium</option>
                                                            <option value="BZ">Belize</option>
                                                            <option value="BJ">Benin</option>
                                                            <option value="BM">Bermuda</option>
                                                            <option value="BT">Bhutan</option>
                                                            <option value="BO">Bolivia</option>
                                                            <option value="BA">Bosnia and Herzegovina</option>
                                                            <option value="BW">Botswana</option>
                                                            <option value="BV">Bouvet Island</option>
                                                            <option value="BR">Brazil</option>
                                                            <option value="IO">British Indian Ocean Territory</option>
                                                            <option value="VG">British Virgin Islands</option>
                                                            <option value="BN">Brunei</option>
                                                            <option value="BG">Bulgaria</option>
                                                            <option value="BF">Burkina Faso</option>
                                                            <option value="BI">Burundi</option>
                                                            <option value="KH">Cambodia</option>
                                                            <option value="CM">Cameroon</option>
                                                            <option value="CA">Canada</option>
                                                            <option value="CV">Cape Verde</option>
                                                            <option value="BQ">Caribbean Netherlands</option>
                                                            <option value="KY">Cayman Islands</option>
                                                            <option value="CF">Central African Republic</option>
                                                            <option value="TD">Chad</option>
                                                            <option value="CL">Chile</option>
                                                            <option value="CN">China</option>
                                                            <option value="CX">Christmas Island</option>
                                                            <option value="CC">Cocos Islands</option>
                                                            <option value="CO">Colombia</option>
                                                            <option value="KM">Comoros</option>
                                                            <option value="CG">Congo</option>
                                                            <option value="CK">Cook Islands</option>
                                                            <option value="CR">Costa Rica</option>
                                                            <option value="HR">Croatia</option>
                                                            <option value="CU">Cuba</option>
                                                            <option value="CW">Curacao</option>
                                                            <option value="CY">Cyprus</option>
                                                            <option value="CZ">Czech Republic</option>
                                                            <option value="CD">Democratic Republic Of Congo</option>
                                                            <option value="DK">Denmark</option>
                                                            <option value="DJ">Djibouti</option>
                                                            <option value="DM">Dominica</option>
                                                            <option value="DO">Dominican Republic</option>
                                                            <option value="EC">Ecuador</option>
                                                            <option value="EG">Egypt</option>
                                                            <option value="GQ">Equatorial Guinea</option>
                                                            <option value="ER">Eritrea</option>
                                                            <option value="EE">Estonia</option>
                                                            <option value="ET">Ethiopia</option>
                                                            <option value="FK">Falkland Islands</option>
                                                            <option value="FO">Faroe Islands</option>
                                                            <option value="FJ">Fiji</option>
                                                            <option value="FI">Finland</option>
                                                            <option value="FR">France</option>
                                                            <option value="GF">French Guiana</option>
                                                            <option value="PF">French Polynesia</option>
                                                            <option value="TF">French Southern Territories</option>
                                                            <option value="GA">Gabon</option>
                                                            <option value="GM">Gambia</option>
                                                            <option value="GE">Georgia</option>
                                                            <option value="DE">Germany</option>
                                                            <option value="GH">Ghana</option>
                                                            <option value="GI">Gibraltar</option>
                                                            <option value="GR">Greece</option>
                                                            <option value="GL">Greenland</option>
                                                            <option value="GD">Grenada</option>
                                                            <option value="GP">Guadeloupe</option>
                                                            <option value="GU">Guam</option>
                                                            <option value="GT">Guatemala</option>
                                                            <option value="GG">Guernsey</option>
                                                            <option value="GN">Guinea</option>
                                                            <option value="GW">Guinea Bissau</option>
                                                            <option value="GY">Guyana</option>
                                                            <option value="HT">Haiti</option>
                                                            <option value="HM">Heard Island and McDonald Islands</option>
                                                            <option value="HN">Honduras</option>
                                                            <option value="HK">Hong Kong</option>
                                                            <option value="HU">Hungary</option>
                                                            <option value="IS">Iceland</option>
                                                            <option value="IN">India</option>
                                                            <option value="ID">Indonesia</option>
                                                            <option value="IR">Iran</option>
                                                            <option value="IQ">Iraq</option>
                                                            <option value="IE">Ireland</option>
                                                            <option value="IM">Isle of Man</option>
                                                            <option value="IL">Israel</option>
                                                            <option value="IT">Italy</option>
                                                            <option value="CI">Ivory Coast</option>
                                                            <option value="JM">Jamaica</option>
                                                            <option value="JP">Japan</option>
                                                            <option value="JE">Jersey</option>
                                                            <option value="JO">Jordan</option>
                                                            <option value="KZ">Kazakhstan</option>
                                                            <option value="KE">Kenya</option>
                                                            <option value="KI">Kiribati</option>
                                                            <option value="XK">Kosovo</option>
                                                            <option value="KW">Kuwait</option>
                                                            <option value="KG">Kyrgyzstan</option>
                                                            <option value="LA">Laos</option>
                                                            <option value="LV">Latvia</option>
                                                            <option value="LB">Lebanon</option>
                                                            <option value="LS">Lesotho</option>
                                                            <option value="LR">Liberia</option>
                                                            <option value="LY">Libya</option>
                                                            <option value="LI">Liechtenstein</option>
                                                            <option value="LT">Lithuania</option>
                                                            <option value="LU">Luxembourg</option>
                                                            <option value="MO">Macao</option>
                                                            <option value="MK">Macedonia</option>
                                                            <option value="MG">Madagascar</option>
                                                            <option value="MW">Malawi</option>
                                                            <option value="MY">Malaysia</option>
                                                            <option value="MV">Maldives</option>
                                                            <option value="ML">Mali</option>
                                                            <option value="MT">Malta</option>
                                                            <option value="MH">Marshall Islands</option>
                                                            <option value="MQ">Martinique</option>
                                                            <option value="MR">Mauritania</option>
                                                            <option value="MU">Mauritius</option>
                                                            <option value="YT">Mayotte</option>
                                                            <option value="MX">Mexico</option>
                                                            <option value="FM">Micronesia</option>
                                                            <option value="MD">Moldova</option>
                                                            <option value="MC">Monaco</option>
                                                            <option value="MN">Mongolia</option>
                                                            <option value="ME">Montenegro</option>
                                                            <option value="MS">Montserrat</option>
                                                            <option value="MA">Morocco</option>
                                                            <option value="MZ">Mozambique</option>
                                                            <option value="MM">Myanmar</option>
                                                            <option value="NA">Namibia</option>
                                                            <option value="NR">Nauru</option>
                                                            <option value="NP">Nepal</option>
                                                            <option value="NL">Netherlands</option>
                                                            <option value="NC">New Caledonia</option>
                                                            <option value="NZ">New Zealand</option>
                                                            <option value="NI">Nicaragua</option>
                                                            <option value="NE">Niger</option>
                                                            <option value="NG">Nigeria</option>
                                                            <option value="NU">Niue</option>
                                                            <option value="NF">Norfolk Island</option>
                                                            <option value="MP">Northern Mariana Islands</option>
                                                            <option value="KP">North Korea</option>
                                                            <option value="NO">Norway</option>
                                                            <option value="OM">Oman</option>
                                                            <option value="PK">Pakistan</option>
                                                            <option value="PW">Palau</option>
                                                            <option value="PS">Palestine</option>
                                                            <option value="PA">Panama</option>
                                                            <option value="PG">Papua New Guinea</option>
                                                            <option value="PY">Paraguay</option>
                                                            <option value="PE">Peru</option>
                                                            <option value="PH">Philippines</option>
                                                            <option value="PN">Pitcairn Islands</option>
                                                            <option value="PL">Poland</option>
                                                            <option value="PT">Portugal</option>
                                                            <option value="PR">Puerto Rico</option>
                                                            <option value="QA">Qatar</option>
                                                            <option value="RE">Reunion</option>
                                                            <option value="RO">Romania</option>
                                                            <option value="RU">Russia</option>
                                                            <option value="RW">Rwanda</option>
                                                            <option value="BL">Saint Barthelemy</option>
                                                            <option value="SH">Saint Helena</option>
                                                            <option value="KN">Saint Kitts and Nevis</option>
                                                            <option value="LC">Saint Lucia</option>
                                                            <option value="SX">Saint Martin</option>
                                                            <option value="MF">Saint Martin</option>
                                                            <option value="PM">Saint Pierre and Miquelon</option>
                                                            <option value="VC">Saint Vincent and the Grenadines</option>
                                                            <option value="SV">Salvador</option>
                                                            <option value="WS">Samoa</option>
                                                            <option value="SM">San Marino</option>
                                                            <option value="ST">Sao Tome and Principe</option>
                                                            <option value="SA">Saudi Arabia</option>
                                                            <option value="SN">Senegal</option>
                                                            <option value="RS">Serbia</option>
                                                            <option value="SC">Seychelles</option>
                                                            <option value="SL">Sierra Leone</option>
                                                            <option value="SG">Singapore</option>
                                                            <option value="SK">Slovakia</option>
                                                            <option value="SI">Slovenia</option>
                                                            <option value="SB">Solomon Islands</option>
                                                            <option value="SO">Somalia</option>
                                                            <option value="ZA">South Africa</option>
                                                            <option value="GS">South Georgia and the South Sandwich Islands
                                                            </option>
                                                            <option value="KR">South Korea</option>
                                                            <option value="SS">South Sudan</option>
                                                            <option value="ES">Spain</option>
                                                            <option value="LK">Sri Lanka</option>
                                                            <option value="SD">Sudan</option>
                                                            <option value="SR">Suriname</option>
                                                            <option value="SJ">Svalbard and Jan Mayen</option>
                                                            <option value="SZ">Swaziland</option>
                                                            <option value="SE">Sweden</option>
                                                            <option value="CH">Switzerland</option>
                                                            <option value="SY">Syria</option>
                                                            <option value="TW">Taiwan</option>
                                                            <option value="TJ">Tajikistan</option>
                                                            <option value="TZ">Tanzania</option>
                                                            <option value="TH">Thailand</option>
                                                            <option value="TL">Timor Leste</option>
                                                            <option value="TG">Togo</option>
                                                            <option value="TK">Tokelau</option>
                                                            <option value="TO">Tonga</option>
                                                            <option value="TT">Trinidad and Tobago</option>
                                                            <option value="TN">Tunisia</option>
                                                            <option value="TR">Turkey</option>
                                                            <option value="TM">Turkmenistan</option>
                                                            <option value="TC">Turks and Caicos Islands</option>
                                                            <option value="TV">Tuvalu</option>
                                                            <option value="UG">Uganda</option>
                                                            <option value="UA">Ukraine</option>
                                                            <option value="AE">United Arab Emirates</option>
                                                            <option value="GB">United Kingdom</option>
                                                            <option value="US">United States</option>
                                                            <option value="UM">United States Minor Outlying Islands</option>
                                                            <option value="UY">Uruguay</option>
                                                            <option value="UZ">Uzbekistan</option>
                                                            <option value="VU">Vanuatu</option>
                                                            <option value="VA">Vatican City</option>
                                                            <option value="VE">Venezuela</option>
                                                            <option value="VN" selected="">Vietnam</option>
                                                            <option value="VI">Virgin Islands</option>
                                                            <option value="WF">Wallis and Futuna</option>
                                                            <option value="EH">Western Sahara</option>
                                                            <option value="YE">Yemen</option>
                                                            <option value="ZM">Zambia</option>
                                                            <option value="ZW">Zimbabwe</option>
                                                        </select>
                                                        <span data-tooltip="Public"><i /><img src="https://www.worldee.com/images/verejne.svg" alt="veřejné" /></span>
                                                    </div>
                                                </div>
                                                <div className={styles.boxInput}>
                                                    <label htmlFor="jsem"> Gender </label>
                                                    <div id="gender-select" className={styles.customSelect} ajax-val={2}>
                                                        <div className={styles.selected}>
                                                            <p>not specified</p>
                                                        </div>
                                                        <div className={styles.selectOptions}>
                                                            <div className={styles.selectOption} ajax-val={2}>
                                                                <p>not specified</p>
                                                            </div>
                                                            <div className={styles.selectOption} ajax-val={0}>
                                                                <p>woman</p>
                                                            </div>
                                                            <div className={styles.selectOption} ajax-val={1}>
                                                                <p>man</p>
                                                            </div>
                                                            <input type="hidden" name="zenamuz" id="gender-hidden" defaultValue={2} />
                                                        </div>
                                                    </div>
                                                    <div className={classNames(
                                                        `${styles.selectBox}`, `${styles.another}`, `${styles.open}`
                                                    )} id="visible-gender-select" ajax-val={1}>
                                                        <div className={styles.selected}>
                                                            <p data-tooltip="Public"><img src="https://www.worldee.com/images/verejne.svg" alt="veřejné" /> Public </p>
                                                        </div>
                                                        <div className={styles.selectOptions}>
                                                            <div className={styles.selectOption} ajax-val={1}>
                                                                <p data-tooltip="Public"><img src="https://www.worldee.com/images/verejne.svg" alt="veřejné" /> Public </p>
                                                            </div>
                                                            <div className={styles.selectOption} ajax-val={0}>
                                                                <p data-tooltip="  Private"><img src="https://www.worldee.com/images/soukrome.svg" alt="soukromé" /> Private </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={classNames(
                                                    `${styles.boxInput}`, `${styles.dateerror}`
                                                )}>
                                                    <label htmlFor="datumnarozeni"> Date of birth</label>
                                                    <div className={classNames(
                                                        `${styles.selectBox}`, `${styles.another}`
                                                    )} id="visible-age-select" ajax-val={1}>
                                                        <div className={styles.selected}>
                                                            <p data-tooltip="Public"><img src="https://www.worldee.com/images/verejne.svg" alt="veřejné" /> Public </p>
                                                        </div>
                                                        <div className={styles.selectOptions}>
                                                            <div className={styles.selectOption} ajax-val={1}>
                                                                <p data-tooltip="Public"><img src="https://www.worldee.com/images/verejne.svg" alt="veřejné" /> Public </p>
                                                            </div>
                                                            <div className={styles.selectOption} ajax-val={0}>
                                                                <p data-tooltip=" Private"><img src="https://www.worldee.com/images/soukrome.svg" alt="soukromé" /> Private </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={classNames(
                                                        `${styles.input}`, `${styles.triple}`
                                                    )}>
                                                        <div className={styles.row} id="jumpForm">
                                                            <div className={styles.input}><input maxLength={2} id="den" type="number" name="den" defaultValue placeholder="DD" data-nette-rules="[{&quot;op&quot;:&quot;optional&quot;},{&quot;op&quot;:&quot;:integer&quot;,&quot;msg&quot;:&quot;Please enter a valid integer.&quot;}]" />
                                                            </div>
                                                            <div className={styles.input}><input maxLength={2} id="mesic" type="number" name="mesic" defaultValue placeholder="MM" data-nette-rules="[{&quot;op&quot;:&quot;optional&quot;},{&quot;op&quot;:&quot;:integer&quot;,&quot;msg&quot;:&quot;Please enter a valid integer.&quot;}]" />
                                                            </div>
                                                            <div className={styles.input}><input maxLength={4} id="rok" type="number" name="rok" defaultValue placeholder="RRRR" data-nette-rules="[{&quot;op&quot;:&quot;optional&quot;},{&quot;op&quot;:&quot;:integer&quot;,&quot;msg&quot;:&quot;Please enter a valid integer.&quot;}]" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={classNames(
                                                    `${styles.boxInput}`, `${styles.w100}`
                                                )}>
                                                    <label htmlFor="ome-text-editor"> About me </label>
                                                    <div className={styles.input}>
                                                        <div
                                                            className={classNames(
                                                                `${styles.trumbowygBox}`, `${styles.trumbowygEditorVisible}`, `${styles.trumbowygEn}`, `${styles.trumbowyg}`
                                                            )}>
                                                            <div className={styles.trumbowygButtonPane}>
                                                                <div className={styles.trumbowygButtonGroup}><button type="button" className={styles.trumbowygUndoButton} title="Undo (Ctrl + Z)" tabIndex={-1}><svg>
                                                                    <use xlinkHref="#trumbowyg-undo" />
                                                                </svg></button><button type="button" className={styles.trumbowygRedoButton} title="Redo (Ctrl + Y)" tabIndex={-1}><svg>
                                                                    <use xlinkHref="#trumbowyg-redo" />
                                                                </svg></button></div>
                                                                <div className={styles.trumbowygButtonGroup}><button type="button" className={styles.trumbowygStrongButton} title="Strong (Ctrl + B)" tabIndex={-1}><svg>
                                                                    <use xlinkHref="#trumbowyg-strong" />
                                                                </svg></button><button type="button" className={styles.trumbowygEmButton} title="Emphasis (Ctrl + I)" tabIndex={-1}><svg>
                                                                    <use xlinkHref="#trumbowyg-em" />
                                                                </svg></button></div>
                                                                <div className={styles.trumbowygButtonGroup}><button type="button" className={styles.trumbowygRemoveformatButton} title="Remove format" tabIndex={-1}><svg>
                                                                    <use xlinkHref="#trumbowyg-removeformat" />
                                                                </svg></button></div>
                                                                <div className={styles.trumbowygButtonGroup}><button type="button" className={styles.trumbowygUnorderedListButton} title="Unordered list" tabIndex={-1}><svg>
                                                                    <use xlinkHref="#trumbowyg-unordered-list">
                                                                    </use>
                                                                </svg></button><button type="button" className={styles.trumbowygOrderedListButton} title="Ordered list" tabIndex={-1}><svg>
                                                                    <use xlinkHref="#trumbowyg-ordered-list" />
                                                                </svg></button></div>
                                                                <div className={styles.trumbowygButtonGroup}><button type="button" className={classNames(`${styles.trumbowygEmojiButton}`, `${styles.trumbowygOpenDropdown}`)} title="Add an emoji" tabIndex={-1}><svg>
                                                                    <use xlinkHref="#trumbowyg-emoji" />
                                                                </svg></button></div>
                                                            </div>
                                                            <div className={styles.trumbowygEditor} contentEditable="true" dir="ltr" style={{ height: 108 }} /><textarea name="ome" id="ome-text-editor" className={styles.trumbowygTextarea} tabIndex={-1} style={{ height: 108 }} defaultValue={""} />

                                                            <div className={styles.trumbowygOverlay} />
                                                        </div>
                                                        <span data-tooltip="Public"><img src="https://www.worldee.com/images/verejne.svg" alt="veřejné" /></span>
                                                    </div>
                                                </div>
                                                <div className="box-input" style={{ display: 'none' }}>
                                                    <label htmlFor="jsem"> Picture upload quality </label>
                                                    <div className="styled-input wbigger">
                                                        <div className="animate-checked">
                                                            <div className="animation-efekt" />
                                                            <div className="checkbox-styled">
                                                                <input id="zakladni" type="radio" name="zaklpuvo" defaultValue={1} />
                                                                <label htmlFor="zakladni"><span> Basic</span></label>
                                                            </div>
                                                            <div className="checkbox-styled">
                                                                <input id="puvodni" type="radio" name="zaklpuvo" defaultValue={0} defaultChecked />
                                                                <label htmlFor="puvodni"><span>Default </span></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="box-input" style={{ display: 'none' }}>
                                                    <label htmlFor="jsem"> Video upload quality </label>
                                                    <div className="styled-input wbigger">
                                                        <div className="animate-checked">
                                                            <div className="animation-efekt" />
                                                            <div className="checkbox-styled">
                                                                <input id="videazakladni" type="radio" name="videazaklpuvo" defaultValue={1} />
                                                                <label htmlFor="videazakladni"><span> Basic </span></label>
                                                            </div>
                                                            <div className="checkbox-styled">
                                                                <input id="videapuvodni" type="radio" name="videazaklpuvo" defaultValue={0} defaultChecked />
                                                                <label htmlFor="videapuvodni"><span> Default </span></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className={styles.boxInput}>
                                                    <label htmlFor="vystupova"> Map variant</label>
                                                    <div id="maps_type-select" className={styles.customSelect} ajax-val="Europe">
                                                        <div className={styles.selected}>
                                                            <p>Europe centered</p>
                                                        </div>
                                                        <div className={styles.selectOptions}>
                                                            <div className={styles.selectOption} ajax-val="Europe">
                                                                <p>Europe centered</p>
                                                            </div>
                                                            <div className={styles.selectOption} ajax-val="Asia">
                                                                <p>Asia centered</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.boxInput}>
                                                    <label htmlFor="vystupova"> Language settings</label>
                                                    <div id="jazyk-select" className={styles.customSelect} ajax-val="EN">
                                                        <div className={styles.selected}>
                                                            <p>English</p>
                                                        </div>
                                                        <div className={styles.selectOptions}>
                                                            <div className={styles.selectOption} ajax-val="CS">
                                                                <p>Čeština</p>
                                                            </div>
                                                            <div className={styles.selectOption} ajax-val="EN">
                                                                <p>English</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.odsraneniUctu}>
                                                    <button type="button" className={styles.toggleButton}>
                                                        <strong>Delete profile</strong>
                                                    </button>
                                                    <div className={styles.content}>
                                                        <p>
                                                            Are you sure you want to delete your profile? By deleting your
                                                            profile you will delete all your Worldee content (your profile,
                                                            photos and trips). No user will be able to find you again.
                                                        </p>
                                                        <a id="removeacc" href="#" data-has-password> Delete profile </a>
                                                    </div>
                                                </div>
                                                <hr className={styles.noTopMargin} />
                                            </form>
                                        </div>
                                        <button className={classNames(`${styles.button}`, `${styles.submit}`)} id={styles.send} type="submit" name="button">
                                            <span> Save changes </span>
                                        </button>
                                        <input type="hidden" name="mestohidden" id="mestohidden" defaultValue /><input type="hidden" name="mesto_latlng" id="mesto_latlng" defaultValue /><input type="hidden" name="jazyk" id="jazyk-hidden" defaultValue="EN" /><input type="hidden" name="maps_type" id="maps_type-hidden" defaultValue="Europe" /><input type="hidden" name="visibleCity" id="visible-city-hidden" defaultValue={1} /><input type="hidden" name="visibleAge" id="visible-age-hidden" defaultValue={1} /><input type="hidden" name="visibleGender" id="visible-gender-hidden" defaultValue={1} /><input type="hidden" name="_do" defaultValue="accountForm-submit" />
                                        <div id="delete-button" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.modalHandler}>
                    <div className={styles.modalContent}>
                        <h4> Confirm </h4>
                        <a className={styles.zavritOkno} href="#"><img src="https://www.worldee.com/images/close.svg" alt="Close" /></a>
                        <hr />
                        <p> Are you sure you want to delete your account? </p>
                        <a className={styles.smazat} href="#"> Erase </a>
                        <a className={styles.button} href="#">Cancel </a>
                    </div>
                </div>
                <div className={styles.containerEdWrap}>
                    <div id={styles.edWrap}>
                        <div id={styles.editor} />
                        <div className={styles.buttony}>
                            <div className={styles.rotateButtons}>
                                <button data-tool="Rotate left" type="button" name="button" data-deg={90} className={styles.croppieRotate}><img src="https://www.worldee.com/images/rotate-left.svg" alt="arrow" /></button>
                                <button data-tool="Rotate left" type="button" name="button" data-deg={-90} className={styles.croppieRotate}><img src="https://www.worldee.com/images/rotate-right.svg" alt="arrow" /></button>
                            </div>
                            <button id="editor-cancel" className={styles.croppieRotate}><span>Cancel</span></button>
                            <button id="editor-save" className={styles.button}>crop</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}
