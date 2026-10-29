import { useState, type FormEvent, type ReactNode } from 'react';
import { Check } from 'lucide-react';
import { submitLead } from '@/config';
import Cal from '@calcom/embed-react';

type FormValues = {
  annualIncome: string;
  budget: string;
  newLook: string;
  startDate: string;
};

type Errors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  annualIncome: '',
  budget: '',
  newLook: '',
  startDate: '',
};

function validate(values: FormValues): Errors {
  const errors: Errors = {};

  if (!values.annualIncome) {
    errors.annualIncome = 'Please select your annual income.';
  }

  if (!values.budget) {
    errors.budget = 'Please select your budget.';
  }

  if (!values.newLook) {
    errors.newLook = 'Please select an option.';
  }

  if (!values.startDate) {
    errors.startDate = 'Please select your start date.';
  }

  return errors;
}

const inputBase =
  'w-full rounded-md border bg-ink-700/60 px-4 py-3.5 text-ivory-50 transition-all duration-300 focus:outline-none focus:ring-1';

const selectBase =
  'cursor-pointer appearance-none ' +
  'placeholder:text-ivory-300/40';

const options = {
  annualIncome: [
    { value: '50L-1Cr', label: '50L – 1Cr' },
    { value: '1Cr-10Cr', label: '1Cr – 10Cr' },
    { value: '10Cr+', label: '10Cr+' },
  ],
  budget: [
    { value: '25k-50k', label: '25K – 50K' },
    { value: '50k-1L', label: '50K – 1L' },
    { value: '1L+', label: '1L+' },
  ],
  newLook: [
    { value: 'No', label: 'No' },
    { value: 'Yes', label: 'Yes' },
    {
      value: 'Confused',
      label: "Confused (Let's discuss over a call)",
    },
  ],
};

export default function LeadForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
const [showCalendar, setShowCalendar] = useState(false);
  function update(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }

    setSubmitError('');
  }

 
async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const found = validate(values);
  setErrors(found);

  if (Object.keys(found).length > 0) return;

  setSubmitting(true);
  setSubmitError('');

  try {
    await submitLead(values);

    if (values.budget === 'under-25k') {
      // Show thank-you message for lower-budget leads
      setSuccess(true);
      setValues(initialValues);
    } else {
      // Display the embedded booking calendar
      setShowCalendar(true);
    }
  } catch {
    setSubmitError(
      'Something went wrong. Please try again.'
    );
  } finally {
    setSubmitting(false);
  }
}


  const fieldClass = (hasError: boolean) =>
    `${inputBase} ${
      hasError
        ? 'border-red-400/60 focus:border-red-400 focus:ring-red-400/50'
        : 'border-ivory-200/15 focus:border-champagne-500 focus:ring-champagne-500/40'
    }`;


    if (showCalendar) {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="text-center font-serif text-3xl font-light text-ivory-50 sm:text-4xl">
          Book Your Personal Styling Consultation
        </h2>

        <p className="mt-4 text-center text-sm text-ivory-300/70">
          Choose a convenient date and time for your consultation.
        </p>

        <div className="mt-10 overflow-hidden rounded-xl border border-champagne-500/30 bg-white">
          <Cal
            calLink="https://cal.com/som-das-jx3c5j/30min"
            style={{
              width: '100%',
              height: '650px',
              overflow: 'scroll',
            }}
            config={{
              layout: 'month_view',
            }}
          />
        </div>
      </div>
    </section>
  );
}

  if (success) {
    return (
      <section className="px-6 pt-20 md:pt-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="animate-fade-up flex flex-col items-center justify-center rounded-xl border border-champagne-500/30 bg-ink-700/50 px-6 py-14 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-champagne-500/50 text-champagne-400">
              <Check className="h-6 w-6" aria-hidden />
            </div>

            <p className="mt-6 font-serif text-2xl text-ivory-50 sm:text-3xl">
              Thank you for your interest.
            </p>

            <p className="mt-2 text-sm text-ivory-300/70">
              Your details have been received.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 pt-16 md:pt-20">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="mt-4 text-center font-serif text-3xl font-light text-ivory-50 sm:text-4xl">
          Get a Free Full Outfit Personalized to Your Skin Tone
          Using Your Existing Closet
        </h2>

        <p className="mt-4 text-center text-xs uppercase tracking-luxury text-champagne-400">
          Fill in your details to get started
        </p>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.5fr_1fr_auto] lg:items-start"
        >
          {/* Annual Income */}
          <Field
            id="annualIncome"
            label="Annual Income"
            error={errors.annualIncome}
          >
            <select
              id="annualIncome"
              value={values.annualIncome}
              onChange={(e) =>
                update('annualIncome', e.target.value)
              }
              aria-invalid={!!errors.annualIncome}
              aria-describedby={
                errors.annualIncome
                  ? 'annualIncome-error'
                  : undefined
              }
              className={`${fieldClass(!!errors.annualIncome)} ${selectBase} ${
                values.annualIncome
                  ? ''
                  : 'text-ivory-300/50'
              }`}
            >
              <option value="" disabled>
                Select annual income
              </option>

              {options.annualIncome.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="bg-ink-700 text-ivory-50"
                >
                  {option.label}
                </option>
              ))}
            </select>
          </Field>

          {/* Budget */}
          <Field
            id="budget"
            label="Budget"
            error={errors.budget}
          >
            <select
              id="budget"
              value={values.budget}
              onChange={(e) =>
                update('budget', e.target.value)
              }
              aria-invalid={!!errors.budget}
              aria-describedby={
                errors.budget ? 'budget-error' : undefined
              }
              className={`${fieldClass(!!errors.budget)} ${selectBase} ${
                values.budget ? '' : 'text-ivory-300/50'
              }`}
            >
              <option value="" disabled>
                Select your budget
              </option>

              {options.budget.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="bg-ink-700 text-ivory-50"
                >
                  {option.label}
                </option>
              ))}
            </select>
          </Field>

          {/* Open to a New Look */}
          <Field
            id="newLook"
            label="Open to a New Look?"
            error={errors.newLook}
          >
            <select
              id="newLook"
              value={values.newLook}
              onChange={(e) =>
                update('newLook', e.target.value)
              }
              aria-invalid={!!errors.newLook}
              aria-describedby={
                errors.newLook ? 'newLook-error' : undefined
              }
              className={`${fieldClass(!!errors.newLook)} ${selectBase} ${
                values.newLook ? '' : 'text-ivory-300/50'
              }`}
            >
              <option value="" disabled>
                Choose an option
              </option>

              {options.newLook.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="bg-ink-700 text-ivory-50"
                >
                  {option.label}
                </option>
              ))}
            </select>
          </Field>

          {/* Start Date */}
          <Field
            id="startDate"
            label="Start Date"
            error={errors.startDate}
          >
            <input
              id="startDate"
              type="date"
              value={values.startDate}
              onChange={(e) =>
                update('startDate', e.target.value)
              }
              aria-invalid={!!errors.startDate}
              aria-describedby={
                errors.startDate ? 'startDate-error' : undefined
              }
              className={`${fieldClass(!!errors.startDate)} ${
                values.startDate
                  ? ''
                  : '[color-scheme:dark]'
              }`}
            />
          </Field>

          {/* Submit Button */}
          <div className="flex items-end md:col-span-2 lg:col-span-1">
            <button
              type="submit"
              disabled={submitting}
              className="group relative h-[54px] w-full overflow-hidden rounded-md bg-champagne-500 px-8 text-xs font-medium uppercase tracking-luxury-sm text-ink-900 transition-all duration-300 hover:bg-champagne-400 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? 'Sending…' : 'Avail Now'}
            </button>
          </div>
        </form>

        {submitError && (
          <p
            className="mt-4 text-center text-sm text-red-300"
            role="alert"
          >
            {submitError}
          </p>
        )}
      </div>
    </section>
  );
}





function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="text-left">
      <label
        htmlFor={id}
        className="mb-2 block text-[11px] uppercase tracking-luxury-sm text-ivory-300/70"
      >
        {label}
      </label>

      {children}

      {error && (
        <p
          id={`${id}-error`}
          className="mt-2 text-xs text-red-300/90"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}