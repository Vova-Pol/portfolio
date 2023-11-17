import React from 'react';
import './Stack.css';
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoRedux,
  BiLogoJava,
  BiLogoSpringBoot,
  BiLogoGit,
  BiLogoVisualStudio,
  BiLogoApple,
} from 'react-icons/bi';
import {
  SiExpress,
  SiMongoose,
  SiMongodb,
  SiSpringboot,
  SiMysql,
  SiIntellijidea,
  SiWebpack,
  SiPostman,
} from 'react-icons/si';
import { DiNpm } from 'react-icons/di';

export const Stack = () => {
  return (
    <section id="stack" className="stack">
      <h2 className="stack__title">Стек</h2>
      <ul className="stack__back-front-list">
        <li className="stack__list-container">
          <h3 className="stack__subtitle">Frontend</h3>
          <ul className="stack__stack-list">
            <li className="stack__list-item">
              <BiLogoHtml5 className="stack__skill-icon html" />
              <span className="stack__skill">HTML</span>
            </li>
            <li className="stack__list-item">
              <BiLogoCss3 className="stack__skill-icon css" />
              <span className="stack__skill">CSS</span>
            </li>
            <li className="stack__list-item">
              <BiLogoJavascript className="stack__skill-icon js" />
              <span className="stack__skill">JavaScript</span>
            </li>
            <li className="stack__list-item">
              <BiLogoReact className="stack__skill-icon react" />
              <span className="stack__skill">React.js</span>
            </li>
            <li className="stack__list-item">
              <SiWebpack className="stack__skill-icon webpack" />
              <span className="stack__skill">Webpack</span>
            </li>
            <li className="stack__list-item">
              <BiLogoTypescript className="stack__skill-icon typescript" />
              <span className="stack__skill">TypeScript</span>
            </li>
            <li className="stack__list-item">
              <BiLogoRedux className="stack__skill-icon redux" />
              <span className="stack__skill">Redux Toolkit</span>
            </li>
          </ul>
        </li>
        <li className="stack__list-container">
          <h3 className="stack__subtitle">Backend</h3>
          <ul className="stack__stack-list">
            <li className="stack__list-item">
              <SiExpress className="stack__skill-icon express" />
              <span className="stack__skill">Express.js</span>
            </li>
            <li className="stack__list-item">
              <SiMongoose className="stack__skill-icon mongoose" />
              <span className="stack__skill">Mongoose</span>
            </li>
            <li className="stack__list-item">
              <SiMongodb className="stack__skill-icon mongodb" />
              <span className="stack__skill">MongoDB</span>
            </li>
            <hr className="stack__line" />
            <li className="stack__list-item">
              <BiLogoJava className="stack__skill-icon java" />
              <span className="stack__skill">Java</span>
            </li>
            <li className="stack__list-item">
              <SiSpringboot className="stack__skill-icon spring" />
              <span className="stack__skill">Spring Boot</span>
            </li>
            <li className="stack__list-item">
              <SiMysql className="stack__skill-icon mysql" />
              <span className="stack__skill">MySQL</span>
            </li>
            <li className="stack__list-item">
              <BiLogoSpringBoot className="stack__skill-icon spring" />
              <span className="stack__skill">Spring Security</span>
            </li>
          </ul>
        </li>
        <li className="stack__list-container">
          <h3 className="stack__subtitle">DevTools</h3>
          <ul className="stack__stack-list">
            <li className="stack__list-item">
              <BiLogoGit className="stack__skill-icon git" />
              <span className="stack__skill">Git</span>
            </li>
            <li className="stack__list-item">
              <BiLogoVisualStudio className="stack__skill-icon vs-code" />
              <span className="stack__skill">Visual Studio Code</span>
            </li>
            <li className="stack__list-item">
              <SiIntellijidea className="stack__skill-icon intellij" />
              <span className="stack__skill">IntelliJ IDEA</span>
            </li>
            <li className="stack__list-item">
              <DiNpm className="stack__skill-icon npm" />
              <span className="stack__skill">Npm</span>
            </li>
            <li className="stack__list-item">
              <SiPostman className="stack__skill-icon postman" />
              <span className="stack__skill">Postman</span>
            </li>
            <li className="stack__list-item">
              <BiLogoApple className="stack__skill-icon macos" />
              <span className="stack__skill">Mac OS</span>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};
