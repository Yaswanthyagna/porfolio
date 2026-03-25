import { ResumeData } from "./types";

export const RESUME_DATA: ResumeData = {
  name: "Nimmagadda Yagna Yaswanth",
  title: "Data Scientist",
  contact: {
    phone: "(816) 419-8990",
    email: "nimmagaddayagna@gmail.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  summary: "Data Scientist with 3.5 years of experience building production ML models in financial services. Core work spans credit scoring, fraud detection, and risk modeling — mostly XGBoost and LightGBM pipelines deployed on AWS SageMaker with MLflow tracking. Comfortable owning a model end-to-end: feature engineering, validation, deployment, and monitoring. Recently added time series forecasting and LLM-based pipeline work. Looking for DS or ML Engineer roles where models actually ship.",
  technicalSkills: [
    {
      category: "ML & Modeling",
      skills: ["XGBoost", "LightGBM", "Logistic Regression", "Random Forest", "Gradient Boosting", "Time Series (Prophet, ARIMA)", "Scikit-learn", "Feature Engineering", "Cross-validation", "Hyperparameter Tuning"],
    },
    {
      category: "Languages & Analytics",
      skills: ["Python (Pandas, NumPy, Matplotlib, Seaborn)", "SQL", "R", "PySpark", "Spark"],
    },
    {
      category: "Cloud & MLOps",
      skills: ["AWS (SageMaker, EC2, S3, Lambda, Kinesis)", "Azure (ML Studio, Databricks)", "GCP (BigQuery, Vertex AI)", "MLflow", "Airflow", "Model Monitoring"],
    },
    {
      category: "Data & LLM Stack",
      skills: ["Snowflake", "PostgreSQL", "MySQL", "SQL Server", "LangChain", "Vector Databases", "ETL/ELT Pipelines", "Data Lakes"],
    },
    {
      category: "Visualization & Tools",
      skills: ["Power BI", "Tableau", "Git", "Jupyter", "Statistical Hypothesis Testing", "A/B Testing"],
    },
  ],
  experience: [
    {
      role: "Data Scientist",
      company: "Deloitte USA",
      location: "Remote",
      period: "Jan 2025 – Present",
      highlights: [
        "Built and deployed credit scoring models using XGBoost and logistic regression on AWS SageMaker; improved loan approval accuracy by 12% and reduced default exposure by 18% across a mid-sized bank's consumer lending portfolio.",
        "Engineered 40+ features from raw transaction and behavioral data; ran PSI and CSI stability tests monthly to catch drift before it hit production model performance.",
        "Set up MLflow experiment tracking and model versioning across three active risk models; cut model refresh cycle from 3 weeks to 5 days by automating validation pipelines.",
        "Built automated scoring pipeline on AWS Lambda and Kinesis for real-time fraud inference, processing 50K+ daily transactions with sub-200ms latency.",
        "Ran Fair Lending and disparate impact analysis on credit models to meet regulatory requirements; documented findings for model risk governance review.",
        "Presented AUC, KS, and business impact metrics to senior stakeholders in Risk and Product; translated model outputs into plain-language recommendations that informed two pricing policy changes.",
      ],
    },
    {
      role: "Data Scientist / Analyst",
      company: "Infosys",
      location: "India",
      period: "Jan 2021 – Jun 2023",
      highlights: [
        "Built customer churn prediction models using gradient boosting and logistic regression on a telecom dataset of 500K+ accounts; achieved 88% accuracy and identified top behavioral signals driving 30-day churn risk.",
        "Developed customer segmentation pipeline using K-Means and RFM analysis; outputs fed directly into marketing campaign targeting, improving retention outreach precision by 22%.",
        "Ran A/B tests and hypothesis testing to validate model assumptions across customer segments; surfaced three statistically significant behavioral patterns that changed how the risk team set thresholds.",
        "Automated feature generation and model scoring pipelines in Python, reducing manual analyst effort by 15 hours per week on recurring monthly reports.",
        "Built Power BI dashboards for senior management showing model KPIs, segment health metrics, and churn trend forecasts updated on a weekly cadence.",
      ],
    },
  ],
  projects: [
    {
      title: "Financial Time Series Forecasting Pipeline",
      tech: ["Python", "Prophet", "ARIMA", "MLflow", "AWS S3", "Pandas"],
      description: [
        "Built an end-to-end forecasting pipeline on S&P 500 sector revenue data using Facebook Prophet and ARIMA; compared models across 8 industry sectors with backtesting on 24 months of held-out data, achieving MAPE under 6% on stable sectors.",
        "Automated retraining triggers based on forecast drift thresholds; logged all experiments in MLflow with parameter tracking and model comparison dashboards.",
      ],
    },
    {
      title: "LLM-Powered Risk Narrative Generator",
      tech: ["Python", "LangChain", "OpenAI API", "FastAPI"],
      description: [
        "Built a LangChain pipeline that takes structured credit model outputs (feature importance, score bands, risk flags) and generates plain-English risk narratives for compliance documentation; reduced manual report drafting time by roughly 3 hours per model review cycle.",
        "Integrated retrieval-augmented generation (RAG) to pull relevant regulatory guidelines into generated narratives; deployed as a FastAPI endpoint for internal team use.",
      ],
    },
    {
      title: "Bank Customer Churn Prediction",
      tech: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Matplotlib"],
      description: [
        "Predicted 30-day churn risk on 10K customer records using XGBoost with SHAP-based feature explanation; identified account balance drop and transaction inactivity as the two strongest predictors.",
        "Tuned decision threshold using precision-recall tradeoff to optimize for retention campaign ROI rather than raw accuracy.",
      ],
    },
  ],
  education: {
    degree: "Master of Science, Computer Science",
    university: "University of Central Missouri",
  },
};
